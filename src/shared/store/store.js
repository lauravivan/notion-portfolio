import { createStore } from "vuex";

// const randomId = () => {
//   return Math.random().toString(36).substring(2, 9);
// };

const pagesInfo = JSON.parse(localStorage.getItem("pagesInfo"));

if (!pagesInfo) {
  localStorage.setItem(
    "pagesInfo",
    JSON.stringify({
      favorites: {
        about: {
          pagePath: "/",
          pageName: "About",
          pageIcon: "/about.png",
          pageBanner: "/banner/about.jpg",
          pageId: "about-page",
          fontStyle: "",
          fontSize: "",
          pageWidth: "",
        },
        contact: {
          pagePath: "/contact",
          pageName: "Contact",
          pageIcon: "/contact.png",
          pageBanner: "/banner/contact.jpg",
          pageContentID: "contact-page",
          fontStyle: "",
          fontSize: "",
          pageWidth: "",
        },
        github: {
          pagePath: "/github",
          pageName: "Github",
          pageIcon: "/github.png",
          pageBanner: "/banner/github.jpg",
          pageContentID: "github-page",
          fontStyle: "",
          fontSize: "",
          pageWidth: "",
        },
        reference: {
          pagePath: "/reference",
          pageName: "Reference",
          pageIcon: "/reference.png",
          pageBanner: "/banner/reference.jpg",
          pageContentID: "reference-page",
          fontStyle: "",
          fontSize: "",
          pageWidth: "",
        },
      },
      projects: {
        trendTide: {
          pagePath: "/trend-tide",
          pageName: "TrendTide",
          pageIcon: "/trend-tide.png",
          pageId: "trend-tide-page",
          fontStyle: "",
          fontSize: "",
          pageWidth: "",
          projectUrl: "https://trend-tide.onrender.com",
          githubUrl: "https://api.github.com/repos/lauravivan/trend-tide/",
        },
      },
    })
  );
}

const store = createStore({
  state: {
    pagesInfo: JSON.parse(localStorage.getItem("pagesInfo")),
    activePage: null,
    projectAuthor: `Laura Vivan's Portfolio`,
    authorSocialMedia: "@lauravivan",
    referenceInfo: {
      aboutPage: {
        name: "About page",
        banner:
          'Photo by <a href="https://unsplash.com/@jasebloor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jase Bloor</a> on <a href="https://unsplash.com/photos/japanese-lantern-over-city-bike-at-nighttime-oCZHIa1D4EU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
        icon: '<a href="https://www.flaticon.com/free-icons/info" title="info icons">Info icons created by Freepik - Flaticon</a>',
      },
      contactPage: {
        name: "Contact page",
        banner:
          'Photo by Satoshi Hirayama: <a href="https://www.pexels.com/photo/crowd-surrounded-by-buildings-during-night-time-2070033/">Access here</a>',
        icon: 'From <a href="https://www.svgrepo.com/">Svg Repo</a>',
      },
      githubPage: {
        name: "Github page",
        banner:
          'Photo by <a href="https://unsplash.com/@ajny?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">AJ</a> on <a href="https://unsplash.com/photos/pink-flowers-McsNra2VRQQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
        icon: 'From <a href="https://www.svgrepo.com/">Svg Repo</a>',
      },
      referencePage: {
        name: "Reference page",
        banner:
          'Photo by <a href="https://unsplash.com/@agk42?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alex Knight</a> on <a href="https://unsplash.com/photos/empty-pathway-in-between-stores-wfwUpfVqrKU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
        icon: '<a href="https://www.flaticon.com/free-icons/reference" title="reference icons">Reference icons created by Dwi ridwanto - Flaticon</a>',
      },
    },
  },
  mutations: {
    storeUserPreference(state, { pageName, prefToUpdate, valueToUpdate }) {
      const handle = pageName.charAt(0).toLowerCase() + pageName.slice(1);

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
  },
});

export default store;
