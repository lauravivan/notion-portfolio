import { createStore } from "vuex";
import {
  getSettings as getSettingsLS,
  setSettings as setSettingsLS,
  setTheme as setThemeLS,
  getTheme as getThemeLS
} from "@/core/util/local-storage";
import { Page } from "@/core/@types/page";
import { Theme } from "@/core/util";

type StoreState = {
  activePage: Page | null;
  settings: PagesSettings;
  theme: Theme;
};

const store = createStore({
  state: {
    activePage: null,
    settings: getSettingsLS(),
    theme: getThemeLS()
  },
  mutations: {
    // storeSettings(
    //   state: StoreState,
    //   payload: { key: string; settings: Settings }
    // ) {
    //   const newSettings = {
    //     ...state.settings,
    //     [payload.key]: payload.settings,
    //   };

    //   state.settings = newSettings;
    //   setSettingsLS(newSettings);
    // },
    storeActivePage(state: StoreState, activePage: Page) {
      state.activePage = activePage;
    },
    // storeTheme(state: StoreState, theme: Theme) {
    //   state.theme = theme;
    //   setThemeLS(theme);
    // },
    // updatePages(state: StoreState, payload: { id: string; page: Page }) {
    //   state.pages = {
    //     ...state.pages,
    //     [payload.id]: payload.page,
    //   };
    // },
  },
  getters: {
    getActivePage: (state) => state.activePage,
    // getFontsOptions: (state) => state.fontsOptions,
    // getFontSizeOptions: (state) => state.fontSizeOptions,
    // getPageWidthOptions: (state) => state.pageWidthOptions,
    getSettings: (state) => state.settings,
    getTheme: (state) => state.theme,
  },
});

export default store;
