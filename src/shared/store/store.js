import { createStore } from "vuex";
import createPage from "util/createPage";
import { setPagesInfo, pagesInfo } from "util/util";
import createGhPages from "util/createGhPage";

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
  path: "projects",
});

pagesInfo["github"].pages = ghPages;

setPagesInfo(pagesInfo);

try {
  await createGhPages();
} catch (err) {
  console.error(err);
}

if (pagesInfo["github"].pages[756993173]) {
  pagesInfo["projects"].pages["trendTide"] = {
    ...pagesInfo["github"].pages[756993173],
  };
  const trendTide = pagesInfo["projects"].pages["trendTide"];
  trendTide.key = "trendTide";
  trendTide.pageBanner = "/banner/trendTide.png";
  trendTide.pageIcon = "/trendTide.png";
  trendTide.pagePath = "/projects/trendTide";
  trendTide.pageId = "trendTide-page";
}

setPagesInfo(pagesInfo);

const store = createStore({
  state: {
    pagesInfo: JSON.parse(localStorage.getItem("pagesInfo")),
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
