import { createStore } from "vuex";

const pagesInfo = JSON.parse(localStorage.getItem("pagesInfo")) || {};

const getFavs = () => {
  return pagesInfo ? pagesInfo.favorites : "";
};

const getProjs = () => {
  return pagesInfo ? pagesInfo.projects : "";
};

const pagesInfoObj = {
  favorites: {
    about: {
      key: "about",
      pagePath: "/",
      pageName: "About (me)",
      pageIcon: "/about.png",
      pageBanner: "/banner/about.jpg",
      pageId: "about-page",
      fontStyle: getFavs() ? getFavs().about.fontStyle : "",
      fontSize: getFavs() ? getFavs().about.fontSize : "",
      pageWidth: getFavs() ? getFavs().about.pageWidth : "",
    },
    contact: {
      key: "contact",
      pagePath: "/contact",
      pageName: "Contact",
      pageIcon: "/contact.png",
      pageBanner: "/banner/contact.jpg",
      pageContentID: "contact-page",
      pageId: "contact-page",
      fontStyle: getFavs() ? getFavs().contact.fontStyle : "",
      fontSize: getFavs() ? getFavs().contact.fontSize : "",
      pageWidth: getFavs() ? getFavs().contact.pageWidth : "",
    },
    github: {
      key: "github",
      pagePath: "/github",
      pageName: "Github",
      pageIcon: "/github.png",
      pageBanner: "/banner/github.jpg",
      pageContentID: "github-page",
      pageId: "github-page",
      fontStyle: getFavs() ? getFavs().github.fontStyle : "",
      fontSize: getFavs() ? getFavs().github.fontSize : "",
      pageWidth: getFavs() ? getFavs().github.pageWidth : "",
    },
    reference: {
      key: "reference",
      pagePath: "/reference",
      pageName: "Reference",
      pageIcon: "/reference.png",
      pageBanner: "/banner/reference.jpg",
      pageContentID: "reference-page",
      pageId: "reference-page",
      fontStyle: getFavs() ? getFavs().reference.fontStyle : "",
      fontSize: getFavs() ? getFavs().reference.fontSize : "",
      pageWidth: getFavs() ? getFavs().reference.pageWidth : "",
    },
  },
  projects: {
    trendTide: {
      key: "trendTide",
      pagePath: "/trend-tide",
      pageName: "TrendTide",
      pageIcon: "/trend-tide.png",
      pageId: "trend-tide-page",
      projectUrl: "https://trend-tide.onrender.com",
      githubUrl: "https://api.github.com/repos/lauravivan/trend-tide/",
      fontStyle: getProjs() ? getProjs().trendTide.fontStyle : "",
      fontSize: getProjs() ? getProjs().trendTide.fontSize : "",
      pageWidth: getProjs() ? getProjs().trendTide.pageWidth : "",
    },
  },
};

localStorage.setItem("pagesInfo", JSON.stringify(pagesInfoObj));

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
    },
  },
  mutations: {
    storeUserPreference(state, { handle, prefToUpdate, valueToUpdate }) {
      if (state.pagesInfo.projects[handle]) {
        state.pagesInfo.projects[handle][prefToUpdate] = valueToUpdate;
      } else {
        state.pagesInfo.favorites[handle][prefToUpdate] = valueToUpdate;
      }

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
