import createPage from "util/createPage";
import axios from "axios";
import { pagesInfo, requestDateTime, setRequestDateTime } from "util/util";

async function createGhPage(dt) {
  try {
    const languages = [];

    if (dt.languages_url) {
      const langRes = await axios.get(dt.languages_url);

      if (langRes) {
        for (let lang in langRes.data) {
          languages.push(lang);
        }
      }
    }

    pagesInfo.github.pages[dt.id] = createPage({
      key: dt.id,
      name: dt.name,
      path: `github/${dt.id}`,
      data: {
        id: dt.id,
        watchersCount: dt.watchers_count,
        starsCount: dt.stargazers_count,
        forksCount: dt.forks_count,
        homepage: dt.homepage,
        gitUrl: dt.html_url,
        languages: languages,
        mainLanguage: dt.language,
        description: dt.description,
      },
      icon: "github.png",
    });
  } catch (err) {
    console.error(err);
  }
}

function getGhReposId(repos) {
  const reposId = [];

  for (let repo in repos) {
    reposId.push(repos[repo].id);
  }

  return reposId;
}

function getReposId() {
  const reposId = [];
  const repos = pagesInfo.github.pages;

  for (let repo in repos) {
    reposId.push(repos[repo].key);
  }

  return reposId;
}

function getAddedRepos(repos) {
  const addedIds = [];
  const ghReposId = getGhReposId(repos);
  const reposId = getReposId();
  const addedRepos = [];

  for (let id of ghReposId) {
    if (!reposId.includes(id)) {
      addedIds.push(id);
    }
  }

  for (let repo in repos) {
    if (addedIds.includes(repos[repo].id)) {
      addedRepos.push(repos[repo]);
    }
  }

  return addedRepos;
}

function getDeletedRepos(repos) {
  const ghReposId = getGhReposId(repos);
  const reposId = getReposId();
  const deletedIds = [];
  const reposLocal = pagesInfo.github.pages;
  const deletedRepos = [];

  for (let id of reposId) {
    if (!ghReposId.includes(id)) {
      deletedIds.push(id);
    }
  }

  for (let repo in reposLocal) {
    if (deletedIds.includes(reposLocal[repo].key)) {
      deletedRepos.push(reposLocal[repo].key);
    }
  }

  return deletedRepos;
}

export default async function createGhPages() {
  try {
    let res;
    const now = new Date();
    const requestUrl = "https://api.github.com/users/lauravivan/repos";

    if (requestDateTime && Object.keys(pagesInfo.github.pages).length > 0) {
      const old = new Date(requestDateTime);
      let minutesPassed;

      if (now.getHours() > old.getHours()) {
        minutesPassed = now.getMinutes() + old.getMinutes();
      } else {
        minutesPassed = now.getMinutes() - old.getMinutes();
      }

      if (minutesPassed >= 30) {
        res = await axios.get(requestUrl);
        setRequestDateTime(now);

        if (res) {
          const addedRepos = getAddedRepos(res.data);
          const deletedRepos = getDeletedRepos(res.data);
          const reposLocal = pagesInfo.github.pages;

          if (deletedRepos.length > 0) {
            for (let repo of deletedRepos) {
              delete pagesInfo.github.pages[repo];
            }
          }

          for (let repo in reposLocal) {
            for (let dt in res.data) {
              if (reposLocal[repo].pageData.id == res.data[dt].id) {
                const languages = [];

                if (res.data[dt].languages_url) {
                  const langRes = await axios.get(res.data[dt].languages_url);

                  if (langRes) {
                    for (let lang in langRes.data) {
                      languages.push(lang);
                    }
                  }
                }

                reposLocal[repo].pageName = res.data[dt].name;
                reposLocal[repo].pageData = {
                  id: res.data[dt].id,
                  watchersCount: res.data[dt].watchers_count,
                  starsCount: res.data[dt].stargazers_count,
                  forksCount: res.data[dt].forks_count,
                  homepage: res.data[dt].homepage,
                  gitUrl: res.data[dt].html_url,
                  languages: languages,
                  mainLanguage: res.data[dt].language,
                  description: res.data[dt].description,
                };
              }
            }
          }

          if (addedRepos.length > 0) {
            for (let repo of addedRepos) {
              await createGhPage(repo);
            }
          }
        }
      }
    } else {
      setRequestDateTime(now);

      res = await axios.get(requestUrl);

      if (res) {
        for (let data in res.data) {
          let dt = res.data[data];
          await createGhPage(dt);
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}
