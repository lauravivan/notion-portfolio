import { getGithubRepos } from "@/core/util/getGithubRepos";
import { getRepoLanguages } from "./getRepoLangs";

export default async function createAsyncPage(
  {
    id = "",
    path = "",
    name = "",
    iconPath = "",
    bannerPath = "",
    parentPage = {} as Page,
  }: Partial<Page>,
  theme?: string
) {
  const page: Page = {
    id,
    bannerPath: `/banners/${bannerPath || id}.webp`,
    iconPath: `/icons/${iconPath || id}.png`,
    name,
    path: "/" + `${path || id}`,
    parentPage,
  };

  if (id === "github") {
    const res = await getGithubRepos();
    if (res.ok && "res" in res) {
      const pages = [] as Page[];
      for (let repo of res.res) {
        const langsRaw = await getRepoLanguages(repo.languages_url);
        const languages = Object.keys(langsRaw || {});

        pages.push({
          id: `${repo.id}`,
          name: repo.name,
          path: `github/${repo.id}`,
          ghData: {
            id: repo.id,
            watchCount: repo.watchers_count,
            name: repo.name,
            starCount: repo.stargazers_count,
            forkCount: repo.forks_count,
            url: repo.homepage,
            ghUrl: repo.html_url,
            languages,
            desc: repo.description,
          },
          iconPath: `/icons/projects/gitfollow-${
            ["light-theme", "cat-latte"].includes(theme!) ? "black" : "white"
          }.png`,
          bannerPath: "",
          parentPage: page,
        });
      }

      page.pages = pages;

      return page;
    }
  }

  return page;
}
