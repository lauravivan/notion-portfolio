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
        why: "In 2024 I was invited to participate in another College project, and after that this project was extended to what it would become my Bachelor's thesis.",
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
        why: "I was searching for an app to take track of the countdown of important events and despite I found a really good one, I needed to register more than it was possible. I thought it would be a good idea for resuming React.js studies and create something for my personal use that I was actually needing.",
        about:
          "A website that could look like an app to take track of your important events.",
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
        why: "I was asked ('kind of a technical test') to build a Full-stack project using React.js, Express.js and other tools, so I've decided to build something that a could use a complete CRUD and to fullfill my desire to create a social media with my style, that it was something I wanted for a while.",
        about: "A type of social media",
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
        why: "For a while I wanted a fast way of searching for profiles that don't follow me on github, so I wouldn't waste my time looking for each one.",
        considerations:
          "I intend to expand to use also twitter and maybe instagram",
        about:
          "A place where you can search for profiles that you follow but don't follow you back, in different social medias.",
        ghData: {
          languages: ["TypeScript", "JavaScript", "SCSS", "HTML"],
          url: "https://gitfollow.arualvivan.com/",
        },
      },
      {
        bannerPath: "/banners/projects/ourpetstore.webp",
        iconPath: `/icons/projects/ourpetstore-${
          ["light-theme", "cat-latte"].includes(theme!) ? "black" : "white"
        }.png`,
        id: "ourpetstore",
        name: "OurPetStore",
        path: "/projects/ourpetstore",
        parentPage: page,
        why: "This was my final project of the Web Dev 101 class of 2021 in college.",
        considerations:
          "This was my first experience building a project as big (not just one static interface). It was one of the factors to build me in Web Development. This project have a special place in my ❤️",
        about:
          "A type of ecommerce for dogs and cats build entire with HTML, CSS and Vanilla JavaScript. It simulates a fullstack project but is full static",
        ghData: {
          languages: ["HTML", "CSS", "JavaScript"],
          url: "https://lauravivan.github.io/our-pet-store/trabalho-final/",
        },
      },
      {
        bannerPath: "",
        iconPath: ``,
        id: "lynkr",
        name: "Lynkr",
        path: "/projects/lynkr",
        parentPage: page,
        why: "I'm a person that saves a lot of links, and despite I can do it saving as a bookmark in my favorite browser, this tends to cause me a lot of cognitive load even though I have a slight way of organizing them there. As I needed a way of separating them by category, being able to search for it, and have a very strong visual feedback, I decided to create my own space for that.",
        considerations:
          "For now this is a static and not updated page, with some things to workout. I aim to expand and to become a web system.",
        about:
          "A place to reunite all of your liked/important/interesting links in one place only (in a categorized way)",
        ghData: {
          languages: ["TypeScript", "SCSS", "JavaScript", "HTML"],
          url: "https://my-reference.vercel.app/",
        },
      },
      {
        bannerPath: "",
        iconPath: ``,
        id: "vstudy",
        name: "VisualStudy",
        path: "/projects/vstudy",
        parentPage: page,
        why: "I consider myself a person that works better with visual return, so it's easier for me to better understand when it's visually explained. The idea came in mind in a Node.js course, when I needed to understand better asynchronism",
        about:
          "A website that visually demonstrates how certain concepts work.",
        ghData: {
          languages: ["JavaScript", "CSS", "HTML"],
          url: "https://lauravivan.github.io/visual-study/",
        },
      },
    ];
  }

  return page;
}
