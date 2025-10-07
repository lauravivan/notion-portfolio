import { createStore } from "vuex";
import createPage from "./util/createPage";
import {
  getSettingsLS,
  getThemeLS,
  setSettingsLS,
  setThemeLS,
} from "./util/localStorage";
import { Theme } from "./types/theme";

type StoreState = {
  pages: { [x: string]: Page };
  activePage: Page | null;
  projectAuthor: string;
  authorSocialMedia: string;
  themesOptions: { id: string; name: string }[];
  fontsOptions: { id: string; name: string }[];
  fontSizeOptions: string[];
  pageWidthOptions: string[];
  icons: {
    [x: string]: string;
  };
  settings: PagesSettings;
  references: ReferenceToggle[];
  theme: Theme;
};

const store = createStore({
  state: {
    pages: {
      about: createPage({
        id: "about",
        name: "About (me)",
      }),
      projects: createPage({
        id: "projects",
        name: "My projects",
      }),
      github: createPage({
        id: "github",
        name: "My github repos",
      }),
      certifications: createPage({
        id: "certifications",
        name: "Certifications",
      }),
      contact: createPage({ id: "contact", name: "Contact (me)" }),
      honors: createPage({
        id: "honors-and-awards",
        name: "My honors and Awards",
      }),
      publications: createPage({
        id: "publications",
        name: "My publications",
      }),
      reference: createPage({ id: "reference", name: "Reference" }),
      freelance: createPage({
        id: "freelance",
        name: "Freelance and scholarships",
      }),
      articles: createPage({ id: "articles", name: "My articles" }),
      courses: createPage({ id: "courses", name: "Courses I took" }),
      events: createPage({ id: "events", name: "Community & Events" }),
    },
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
      sandwich: "ion:menu-outline",
      doubleArrowRight: "ic:outline-keyboard-double-arrow-right",
      doubleArrowLeft: "ic:outline-keyboard-double-arrow-left",
      settings: "ion:settings-outline",
      gridView: "ion:grid-outline",
      dotsHoriz: "ion:ellipsis-horizontal",
      arrowDown: "ion:chevron-down-outline",
      arrowRight: "ion:chevron-forward-outline",
      arrowDownFilled: "ion:caret-down",
      arrowRightFilled: "ion:caret-forward",
      check: "ion:checkmark-outline",
      circle: "ion:ellipse",
      forkCode: "ion:git-network-outline",
      star: "ion:star-outline",
      eye: "ion:eye-outline",
      code: "ion:code-slash-outline",
      link: "ion:link-outline",
      add: "ion:add-outline",
      expand: "ion:expand-outline",
      clock: "ion:time-outline",
      list: "ion:list-outline",
      close: "ion:close",
      search: "ion:search",
      arrowLink: "eva:diagonal-arrow-right-up-fill",
    },
    settings: getSettingsLS(),
    references: [
      {
        summary: "About page",
        detailsContent: {
          banner: {
            link: "https://unsplash.com/photos/three-bicycles-parked-in-front-of-building-hwLAI5lRhdM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            author: "Clay Banks",
          },
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
        },
      },
      {
        summary: "Contact page",
        detailsContent: {
          banner: {
            link: "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            author: "Danis Lou",
          },
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
        },
      },
      {
        summary: "Github page",
        detailsContent: {
          banner: {
            link: "https://unsplash.com/photos/school-of-orange-and-white-koi-58TJ5U21byY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            author: "Daniel",
          },
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
        },
      },
      {
        summary: "Reference page",
        detailsContent: {
          banner: {
            link: "https://unsplash.com/photos/person-walking-on-street-while-holding-umbrella-MsMISAIe8Qw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            author: "Andre Benz",
          },
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
        },
      },
      {
        summary: "Projects page",
        detailsContent: {
          banner: {
            link: "https://unsplash.com/photos/people-walking-on-sidewalk-during-night-time-6cfK0SEtpbY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            author: "Pema Lama",
          },
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
        },
      },
      {
        summary: "Certifications page",
        detailsContent: {
          banner: {
            link: "https://unsplash.com/photos/silhouette-of-man-near-outside-qwPSnBvdhtI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            author: "Masaaki Komori",
          },
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
        },
      },
      {
        summary: "Honors and Awards page",
        detailsContent: {
          banner: {
            link: "https://unsplash.com/photos/brown-wooden-storm-glass-door-6nuz52vsbWc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            author: "Shigeki Wakabayashi",
          },
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
        },
      },
      {
        summary: "Publications page",
        detailsContent: {
          banner: {
            link: "https://unsplash.com/photos/people-walking-near-buildings-at-night-DpPutJwgyW8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            author: "Alex Knight",
          },
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
        },
      },
      {
        summary: "Countdown",
        detailsContent: {
          icon: {
            link: "https://www.svgrepo.com/svg/232021/penguin",
            author: "SVG Repo",
          },
        },
      },
      {
        summary: "TrendTide",
        detailsContent: {
          icon: {
            link: "https://www.svgrepo.com/svg/395885/black-cat",
            author: "googlefonts",
          },
        },
      },
      {
        summary: "Freelance and scholarships page",
        detailsContent: {
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
          banner: {
            author: "Yu Kato",
            link: "https://unsplash.com/photos/boats-on-body-of-water-824OwkP7sgk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          },
        },
      },
      {
        summary: "Articles page",
        detailsContent: {
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
          banner: {
            author: "Sorasak",
            link: "https://unsplash.com/photos/two-women-in-purple-and-pink-kimono-standing-on-street-_UIN-pFfJ7c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          },
        },
      },
      {
        summary: "Courses page",
        detailsContent: {
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
          banner: {
            author: "Zhaoli JIN",
            link: "https://unsplash.com/photos/beige-and-black-lamp-on-green-tree-during-nighttime-e4I2ktXz5cA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          },
        },
      },
      {
        summary: "Community & Events page",
        detailsContent: {
          icon: {
            link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
            author: "paulalee",
          },
          banner: {
            author: "Agathe",
            link: "https://unsplash.com/photos/person-riding-bike-on-street-2cdvYh6ULCs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
          },
        },
      },
    ],
    theme: getThemeLS(),
  },
  mutations: {
    storeSettings(
      state: StoreState,
      payload: { key: string; settings: Settings }
    ) {
      const newSettings = {
        ...state.settings,
        [payload.key]: payload.settings,
      };

      state.settings = newSettings;
      setSettingsLS(newSettings);
    },
    storeActivePage(state: StoreState, activePage: Page) {
      state.activePage = activePage;
    },
    storeTheme(state: StoreState, theme: Theme) {
      state.theme = theme;
      setThemeLS(theme);
    },
    updatePages(state: StoreState, payload: { id: string; page: Page }) {
      state.pages = {
        ...state.pages,
        [payload.id]: payload.page,
      };
    },
  },
  getters: {
    getPages: (state) => state.pages,
    getActivePage: (state) => state.activePage,
    getProjectAuthor: (state) => state.projectAuthor,
    getAuthorSocialMedia: (state) => state.authorSocialMedia,
    getThemesOptions: (state) => state.themesOptions,
    getFontsOptions: (state) => state.fontsOptions,
    getFontSizeOptions: (state) => state.fontSizeOptions,
    getPageWidthOptions: (state) => state.pageWidthOptions,
    getIcons: (state) => state.icons,
    getSettings: (state) => state.settings,
    getReferences: (state) => state.references,
    getTheme: (state) => state.theme,
  },
});

export default store;
