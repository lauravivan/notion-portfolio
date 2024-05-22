import createPage from "util/createPage";
import axios from "axios";
import { getPagesInfo } from "util/util";

const TIME_FROM_REQUEST = 40;

/**
 * when a user first access => create all pages and save
    on local storage the datetime request

  when a user reloads it => checks if its passed from 30
  minutes since last request and then, checks for updates
  (changes as deletion or modification) and resaves.
*/

async function createGhPage(repo) {
  try {
    const languages = await getRepoLanguages(repo);
    const pagesInfo = getPagesInfo();

    pagesInfo.github.pages[repo.id] = createPage({
      key: repo.id,
      name: repo.name,
      path: `github/${repo.id}`,
      data: {
        id: repo.id,
        watchersCount: repo.watchers_count,
        starsCount: repo.stargazers_count,
        forksCount: repo.forks_count,
        homepage: repo.homepage,
        gitUrl: repo.html_url,
        languages: languages,
        mainLanguage: repo.language,
        description: repo.description,
      },
      icon: "github.png",
    });

    localStorage.setItem("pagesInfo", JSON.stringify(pagesInfo));
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
  const pagesInfo = getPagesInfo();
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
  const pagesInfo = getPagesInfo();
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

function getTimePassed(now, then) {
  let minutesPassed;

  if (now.getDate() == then.getDate()) {
    if (now.getHours() > then.getHours()) {
      minutesPassed = now.getMinutes() + then.getMinutes();
      return minutesPassed;
    }

    minutesPassed = now.getMinutes() - then.getMinutes();

    return minutesPassed;
  }

  return TIME_FROM_REQUEST;
}

async function getGithubRepos() {
  try {
    const requestUrl = "https://api.github.com/users/lauravivan/repos";

    const res = await axios.get(requestUrl);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getRepoLanguages(repo) {
  const languages = [];

  if (repo.languages_url) {
    const langRes = await axios.get(repo.languages_url);

    if (langRes) {
      for (let lang in langRes.data) {
        languages.push(lang);
      }
    }
  }

  return languages;
}

async function saveUpdates(ghRepos) {
  try {
    const pagesInfo = getPagesInfo();
    const reposLocal = pagesInfo.github.pages;

    for (let repo in reposLocal) {
      for (let ghRepo in ghRepos) {
        if (reposLocal[repo].pageData.id == ghRepos[ghRepo].id) {
          const languages = await getRepoLanguages(ghRepos[ghRepo]);

          reposLocal[repo].pageName = ghRepos[ghRepo].name;
          reposLocal[repo].pageData = {
            id: ghRepos[ghRepo].id,
            watchersCount: ghRepos[ghRepo].watchers_count,
            starsCount: ghRepos[ghRepo].stargazers_count,
            forksCount: ghRepos[ghRepo].forks_count,
            homepage: ghRepos[ghRepo].homepage,
            gitUrl: ghRepos[ghRepo].html_url,
            languages: languages,
            mainLanguage: ghRepos[ghRepo].language,
            description: ghRepos[ghRepo].description,
          };
        }
      }
    }

    localStorage.setItem("pagesInfo", JSON.stringify(pagesInfo));
  } catch (err) {
    console.error(err);
  }
}

function isThereNewRepos(repos) {
  const addedRepos = getAddedRepos(repos);

  if (addedRepos.length > 0) {
    return true;
  }

  return false;
}

function isThereDeletedRepos(repos) {
  const deletedRepos = getDeletedRepos(repos);

  if (deletedRepos.length > 0) {
    return true;
  }

  return false;
}

function deleteDeletedRepos(repos) {
  const deletedRepos = getDeletedRepos(repos);
  const pagesInfo = getPagesInfo();

  for (let repo of deletedRepos) {
    delete pagesInfo.github.pages[repo];
  }

  localStorage.setItem("pagesInfo", JSON.stringify(pagesInfo));
}

async function saveAddedRepos(repos) {
  const addedRepos = getAddedRepos(repos);

  for (let repo of addedRepos) {
    await createGhPage(repo);
  }
}

export default async function createGhPages() {
  try {
    const now = new Date();
    const repos = await getGithubRepos();
    const requestDateTime = localStorage.getItem("requestDateTime") || "";
    const pagesInfo = getPagesInfo();

    if (requestDateTime && Object.keys(pagesInfo.github.pages).length > 0) {
      const then = new Date(requestDateTime);
      const minutesPassed = getTimePassed(now, then);

      if (minutesPassed >= TIME_FROM_REQUEST) {
        localStorage.setItem("requestDateTime", now);

        if (repos) {
          if (isThereNewRepos(repos)) {
            await saveAddedRepos(repos);
          }

          if (isThereDeletedRepos(repos)) {
            deleteDeletedRepos(repos);
          }

          await saveUpdates(repos);
        }
      }
    } else {
      localStorage.setItem("requestDateTime", now);

      if (repos) {
        for (let repo in repos) {
          await createGhPage(repos[repo]);
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}
