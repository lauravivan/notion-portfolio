export default function createPage(
  {
    id = "",
    path = "",
    name = "",
    iconPath = "",
    bannerPath = "",
    parentPage = {} as Page,
    pages = [] as Page[],
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
    pages,
  };

  if (id === "projects") {
    page.pages = [
      {
        bannerPath: "/banners/projects/acessiweb.webp",
        iconPath: "/icons/projects/acessiweb-purple.png",
        id: "acessiweb",
        name: "AcessiWeb",
        path: "/projects/acessiweb",
        desc: "In 2024 I was invited to participate in another College project, and after that this project was extended to what it would become my Bachelor's thesis.",
        about:
          "This project intends to help developers and enthusiasts to build more acessible web systems. Here you can have access to acessibility guidelines in an easy way, buy filtering for deficiences and keywords. These guidelines have a simpler language, making it easier to understand. Also, you can add them to your registered projects, serving as a requirements organizer.",
        more: {
          tddLink:
            "https://kind-parent-217.notion.site/TDD-1b1fcc794298803a9903faa23e46a487?pvs=74",
        },
        parentPage: page,
        ghData: {
          languages: ["TypeScript", "JavaScript", "SCSS"],
          url: "https://acessiweb.arualvivan.com",
        },
      },
      {
        bannerPath: "/banners/projects/countdown.webp",
        iconPath: "/icons/projects/countdown.png",
        id: "countdown",
        name: "Countdown",
        path: "/projects/countdown",
        parentPage: page,
        desc: "I was searching for an app to take track of the countdown of important events and despite I found a really good one, I needed to register more than it was possible. I thought it would be a good idea for resuming React.js studies and create something for my personal use that I was actually needing.",
        ghData: {
          languages: ["TypeScript", "JavaScript", "SCSS", "CSS", "HTML"],
          url: "https://countdown.arualvivan.com/",
        },
      },
      {
        bannerPath: "/banners/projects/trendtide.webp",
        iconPath: "/icons/projects/trendtide.png",
        id: "trendtide",
        name: "TrendTide",
        path: "/projects/trendtide",
        parentPage: page,
        desc: "I was asked to build a Full-stack project using React.js, Express.js and other tools, so I've decided to build something that a could use a complete CRUD and to fullfill my desire to create a social media with my style, that it was something I wanted for a while.",
        ghData: {
          languages: ["JavaScript"],
          url: "https://trendtide.arualvivan.com/",
        },
      },
      {
        bannerPath: "/banners/projects/gitfollow.webp",
        iconPath: `/icons/projects/gitfollow-${
          ["light-theme", "cat-latte"].includes(theme!) ? "black" : "white"
        }.png`,
        id: "gitfollow",
        name: "GitFollow",
        path: "/projects/gitfollow",
        parentPage: page,
        desc: "For a while I wanted a fast way of searching for profiles that don't follow me on github, so I wouldn't waste my time looking for each one",
        ghData: {
          languages: ["TypeScript", "JavaScript", "SCSS", "HTML"],
          url: "https://gitfollow.arualvivan.com/",
        },
      },
    ];
  }

  return page;
}
