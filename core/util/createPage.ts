// export default function createPage(
//   {
//     id = "",
//     path = "",
//     name = "",
//     iconPath = "",
//     bannerPath = "",
//     parentPage = {} as Page,
//     pages = [] as Page[],
//     isMain = false,
//   }: Partial<Page>,
//   theme?: string
// ) {
//   const page: Page = {
//     id,
//     bannerPath: `/banners/${bannerPath || id}.webp`,
//     iconPath: `/icons/${iconPath || id}.png`,
//     name,
//     path: "/" + `${path || id}`,
//     parentPage,
//     pages,
//     isMain,
//   };

import { type DefineComponent } from "vue";

//   if (id === "projects") {
//     page.pages = [
//       {
//         bannerPath: "/banners/projects/countdown.webp",
//         iconPath: "/icons/projects/countdown.png",
//         id: "countdown",
//         name: "Countdown",
//         path: "/projects/countdown",
//         parentPage: page,
//         why: "I was searching for an app to take track of the countdown of important events and despite I found a really good one, I needed to register more than it was possible. I thought it would be a good idea for resuming React.js studies and create something for my personal use that I was actually needing.",
//         about:
//           "A website that could look like an app to take track of your important events.",
//         ghData: {
//           languages: ["TypeScript", "JavaScript", "SCSS", "CSS", "HTML"],
//           url: "https://countdown.arualvivan.com/",
//         },
//       },
//       {
//         bannerPath: "/banners/projects/ourpetstore.webp",
//         iconPath: `/icons/projects/ourpetstore-${
//           ["light-theme", "cat-latte"].includes(theme!) ? "black" : "white"
//         }.png`,
//         id: "ourpetstore",
//         name: "OurPetStore",
//         path: "/projects/ourpetstore",
//         parentPage: page,
//         why: "This was my final project of the Web Dev 101 class of 2021 in college.",
//         considerations:
//           "This was my first experience building a web project of my own. It was one of the factors to build me in Web Development. This project have a special place in my ❤️",
//         about:
//           "A type of ecommerce for dogs and cats build entire with HTML, CSS and Vanilla JavaScript. It simulates a fullstack project but is full static",
//         ghData: {
//           languages: ["HTML", "CSS", "JavaScript"],
//           url: "https://lauravivan.github.io/our-pet-store/trabalho-final/",
//         },
//       },
//     ];
//   }

//   return page;
// }

const createPage = ({
  id = "",
  title = "",
  parentPage,
  pages,
  isHomepage = false,
  component,
  bannerAuthor,
  bannerLink,
  iconPath,
  iconAuthor,
  iconLink,
}: {
  id: string;
  title: string;
  parentPage?: PageInfo;
  pages?: PageInfo[];
  isHomepage: boolean;
  iconPath: string;
  iconAuthor?: string;
  iconLink?: string;
  bannerAuthor: string;
  bannerLink: string;
  component: DefineComponent<{}, {}, any>;
}) => {
  const page: PageInfo = {
    id,
    banner: {
      path: `/banners/${id}.webp`,
      author: bannerAuthor,
      link: bannerLink,
    },
    icon: {
      path: `${iconPath}`,
      author: iconAuthor,
      link: iconLink,
    },
    title,
    path: isHomepage ? "/" : "/" + `${id}`,
    parentPage,
    pages,
    isHomepage,
    component,
  };

  return page;
};

export default createPage;
