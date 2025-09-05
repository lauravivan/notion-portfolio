import { getGithubRepos } from "./getGhRepos";

export default async function createProjectPages(): Promise<Page[]> {
  try {
    const repos = await getGithubRepos();

    return [
      {
        bannerPath: "/banners/projects/acessiweb.webp",
        iconPath: "/icons/projects/acessiweb-purple.png",
        id: "acessiweb",
        name: "AcessiWeb",
        path: "/projects/acessiweb",
        settings: {} as Settings,
        desc: "In 2024 I was invited to participate in another College project, and after that this project was extended to what it would become my Bachelor's thesis.",
        about: "Esse projeto...",
        more: {
          tddLink:
            "https://kind-parent-217.notion.site/TDD-1b1fcc794298803a9903faa23e46a487?pvs=74",
        },
        parentPage: {} as Page,
      },
      {
        bannerPath: "/banners/projects/countdown.webp",
        iconPath: "/icons/projects/countdown.png",
        id: "countdown",
        name: "Countdown",
        path: "/projects/countdown",
        settings: {} as Settings,
        parentPage: {} as Page,
        desc: "I was searching for an app to take track of the countdown of important events and despite I found a really good one, I needed to register more than it was possible. I thought it would be a good idea for resuming React.js studies and create something for my personal use that I was actually needing.",
      },
      {
        bannerPath: "/banners/projects/trendtide.webp",
        iconPath: "/icons/projects/trendtide.png",
        id: "trendtide",
        name: "TrendTide",
        path: "/projects/trendtide",
        settings: {} as Settings,
        parentPage: {} as Page,
        desc: "I was asked to build a Full-stack project using React.js, Express.js and other tools, so I've decided to build something that a could use a complete CRUD and to fullfill my desire to create a social media with my style, that it was something I wanted for a while.",
      },
      {
        bannerPath: "/banners/projects/gitfollow.webp",
        iconPath: "/icons/projects/gitfollow.png",
        id: "gitfollow",
        name: "GitFollow",
        path: "",
        settings: {} as Settings,
        parentPage: {} as Page,
        desc: "For a while I wanted a fast way of searching for profiles that don't follow me on github, so I wouldn't waste my time looking for each one",
      },
    ];
  } catch {
    return [];
  }
}
