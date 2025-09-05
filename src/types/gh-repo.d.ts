interface GhRepo {
  id: number;
  name: string;
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
  homepage: string;
  html_url: string;
  languages_url: string;
  description: string;
}

interface GhPortfolioRepo {
  id: number;
  name: string;
  watchCount: number;
  starCount: number;
  forkCount: number;
  url: string;
  ghUrl: string;
  languages: string[];
  desc: string;
}
