import { createStore } from "vuex";
import createPage from "util/createPage";
import createGhPages from "util/createGhPage";
import { getPagesInfo, createProjectSubPage } from "util/util";

let pagesInfo = getPagesInfo();

if (pagesInfo["favorites"]) {
  delete pagesInfo["favorites"];
}

const ghPages =
  pagesInfo && pagesInfo.github && pagesInfo.github.pages
    ? pagesInfo.github.pages
    : {};

pagesInfo["about"] = createPage({
  key: "about",
  name: "About (me)",
  icon: "about.png",
  banner: "about.jpg",
});

pagesInfo["contact"] = createPage({
  key: "contact",
  name: "Contact (me)",
  icon: "contact.png",
  banner: "contact.jpg",
  path: "contact",
});

pagesInfo["github"] = createPage({
  key: "github",
  name: "Github",
  icon: "github.png",
  banner: "github.jpg",
  path: "github",
});

pagesInfo["reference"] = createPage({
  key: "reference",
  name: "Reference",
  icon: "reference.png",
  banner: "reference.jpg",
  path: "reference",
});

pagesInfo["projects"] = createPage({
  key: "projects",
  name: "Projects",
  icon: "projects.png",
  banner: "projects.jpg",
  path: "projects",
});

pagesInfo["github"].pages = ghPages;
localStorage.setItem("pagesInfo", JSON.stringify(pagesInfo));

try {
  await createGhPages();
} catch (err) {
  console.error(err);
}

createProjectSubPage(
  757783415,
  "notionPortfolio",
  "Notion Portfolio",
  `Inspired by Nitin Ranganath's idea of creating a portfolio based on VSCode, I've decided that my portfolio's theme would be based on Notion, that is a tool I really like and use in daily basis.
  I chose Vue.js framework because at the time I was having more contact with it and noticed that it would be a good project to be used for future studies.
  Also, I chose for SASS to styling because I enjoy its funcionalities and it makes easier to style larger projects.`,
  "",
  "portfolio/icon.png"
);

createProjectSubPage(
  756993173,
  "trendTide",
  "Trend Tide",
  `I was asked to build a Full-stack project using React.js, Express.js and other tools, so I've decided to build something that a could use a complete CRUD and to fullfill my desire to create a social media with my style, that it was something I wanted for a while.`,
  "trendTide.png",
  "trendTide.png"
);

createProjectSubPage(
  799340314,
  "countdown",
  "Countdown",
  `I was searching for an app to take track of the countdown of important events and despite I found a really good one, I needed to register more than it was possible. I thought it would be a good idea for resuming React.js studies and create something for my personal use that I was actually needing.`,
  "",
  "countdown.png"
);

const store = createStore({
  state: {
    pagesInfo: getPagesInfo(),
    activePage: null,
    projectAuthor: `Laura Vivan's Portfolio`,
    authorSocialMedia: "@lauravivan",
    themesOptions: [
      {
        id: "light-theme",
        name: "Light",
      },
      {
        id: "dark-theme",
        name: "Dark",
      },
      {
        id: "cat-latte",
        name: "Cat Latte",
      },
      {
        id: "cat-mocha",
        name: "Cat Mocha",
      },
    ],
    fontsOptions: [
      {
        id: "font-roboto",
        name: "Default",
      },
      {
        id: "font-roboto-serif",
        name: "Serif",
      },
      {
        id: "font-roboto-mono",
        name: "Mono",
      },
    ],
    fontSizeOptions: ["font-size-small"],
    pageWidthOptions: ["page-full-width"],
    icons: {
      sandwich: {
        matIcons: false,
        name: "menu-outline",
      },
      doubleArrowRight: {
        matIcons: true,
        name: "keyboard_double_arrow_right",
      },
      doubleArrowLeft: {
        matIcons: true,
        name: "keyboard_double_arrow_left",
      },
      search: {
        matIcons: false,
        name: "search-outline",
      },
      settings: {
        matIcons: false,
        name: "settings-outline",
      },
      gridView: {
        matIcons: false,
        name: "grid-outline",
      },
      dotsHoriz: {
        matIcons: false,
        name: "ellipsis-horizontal",
      },
      arrowDown: {
        matIcons: false,
        name: "chevron-down-outline",
      },
      arrowRight: {
        matIcons: false,
        name: "chevron-forward-outline",
      },
      arrowDownFilled: {
        matIcons: false,
        name: "caret-down",
      },
      arrowRightFilled: {
        matIcons: false,
        name: "caret-forward",
      },
      check: {
        matIcons: false,
        name: "checkmark-outline",
      },
      circle: {
        matIcons: false,
        name: "ellipse",
      },
      forkCode: {
        matIcons: false,
        name: "git-network-outline",
      },
      star: {
        matIcons: false,
        name: "star-outline",
      },
      eye: {
        matIcons: false,
        name: "eye-outline",
      },
      code: {
        matIcons: false,
        name: "code-slash-outline",
      },
      link: {
        matIcons: false,
        name: "link-outline",
      },
      add: {
        matIcons: false,
        name: "add-outline",
      },
      expand: {
        matIcons: false,
        name: "expand-outline",
      },
      clock: {
        matIcons: false,
        name: "time-outline",
      },
      list: {
        matIcons: false,
        name: "list-outline",
      },
      close: {
        matIcons: false,
        name: "close",
      },
    },
  },
  mutations: {
    storeUserPreference(state, { pageKey, prefToUpdate, valueToUpdate }) {
      function updateUserPreference(pages) {
        function search(pages) {
          for (let page in pages) {
            if (pages[page].key === pageKey) {
              pages[page].pageSettings[prefToUpdate] = valueToUpdate;
              return;
            } else {
              search(pages[page].pages);
            }
          }
        }

        return search(pages);
      }

      updateUserPreference(state.pagesInfo);

      localStorage.setItem("pagesInfo", JSON.stringify(state.pagesInfo));
    },
    storeActivePage(state, activePage) {
      state.activePage = activePage;
    },
  },
  getters: {
    getPagesInfo: (state) => state.pagesInfo,
    getActivePage: (state) => state.activePage,
    getProjectAuthor: (state) => state.projectAuthor,
    getAuthorSocialMedia: (state) => state.authorSocialMedia,
    getReferenceInfo: (state) => state.referenceInfo,
    getThemesOptions: (state) => state.themesOptions,
    getFontsOptions: (state) => state.fontsOptions,
    getFontSizeOptions: (state) => state.fontSizeOptions,
    getPageWidthOptions: (state) => state.pageWidthOptions,
    getIcons: (state) => state.icons,
  },
});

export default store;
