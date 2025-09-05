import { getGithubRepos } from "./getGhRepos";
import { getRepoLanguages } from "./getRepoLangs";

export default async function createGhPages(): Promise<Page[]> {
  try {
    const repos = await getGithubRepos();
    const pages = [] as Page[];

    repos.map(async (repo) => {
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
        iconPath: "/icons/projects/gitfollow-black.png",
        bannerPath: "",
        settings: {} as Settings,
        parentPage: {} as Page,
      });
    });

    return pages;
  } catch {
    return [];
  }
}
