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
        considerations: "It's a work in progress",
        why: "I was asked ('kind of a technical test') to build a Full-stack project using React.js, Express.js and other tools, so I've decided to build something that a could use a complete CRUD and to fullfill my desire to create a social media with my style, that it was something I wanted for a while.",
        about: "A type of social media",
        ghData: {
          languages: ["JavaScript"],
          url: "https://trendtide.arualvivan.com/",
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
          "This was my first experience building a web project of my own. It was one of the factors to build me in Web Development. This project have a special place in my ❤️",
        about:
          "A type of ecommerce for dogs and cats build entire with HTML, CSS and Vanilla JavaScript. It simulates a fullstack project but is full static",
        ghData: {
          languages: ["HTML", "CSS", "JavaScript"],
          url: "https://lauravivan.github.io/our-pet-store/trabalho-final/",
        },
      },
    ];
  }

  return page;
}
