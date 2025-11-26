import { FontFamily, FontSize, PageSize, Theme } from "@core/enum";
import {
  getActiveTab,
  getSettings,
  getTabs,
  getTheme,
  setSettings,
  setTheme,
} from "@core/util/local-storage";
import { defineStore } from "pinia";

const useStore = defineStore("global", {
  state: () => ({
    activePage: {} as PageInfo,
    settings: getSettings(),
    theme: getTheme(),
    tabs: getTabs(),
    activeTab: getActiveTab(),
  }),
  actions: {
    storeActivePage(activePage: PageInfo) {
      this.activePage = activePage;
    },
    storeTheme(theme: keyof typeof Theme) {
      this.theme = theme;
      setTheme(theme);
    },
    storeSettings({
      fontFamily,
      fontSize,
      pageSize,
    }: {
      fontFamily?: keyof typeof FontFamily;
      fontSize?: keyof typeof FontSize;
      pageSize?: keyof typeof PageSize;
    }) {
      let stts = this.settings;

      if (fontFamily) {
        stts = {
          ...stts,
          fontFamily,
        };
      }

      if (fontSize) {
        stts = {
          ...stts,
          fontSize,
        };
      }

      if (pageSize) {
        stts = {
          ...stts,
          pageSize,
        };
      }

      this.settings = stts;
      setSettings(stts);
    },
  },
  getters: {
    getActivePage: (state) => state.activePage,
    getSettings: (state) => state.settings,
    getTheme: (state) => state.theme,
    getTabs: (state) => state.tabs,
    getActiveTab: (state) => state.activeTab,
  },
});

export default useStore;
