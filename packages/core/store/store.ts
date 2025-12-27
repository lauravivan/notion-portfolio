import type { PageInfo } from "@core/@types";
import { FontFamily, FontSize, PageSize, Theme } from "@core/enum";
import {
  getActiveTab,
  getTabs,
  getTheme,
  getAsideOpen,
} from "@core/util/local-storage";
import getDynamicPageInfo from "@core/util/local-storage/dynamic-page-info/getDynamicPageInfo";
import type { DynamicPageInfo, Tab } from "@core/util/local-storage/types";
import { defineStore } from "pinia";
import piniaInstance from "./instance";

interface State {
  dynamicPageInfo: DynamicPageInfo;
  theme: keyof typeof Theme;
  tabs: Tab[];
  activeTab: number;
  activePage: PageInfo;
  isAsideOpen: boolean;
}

const useStore = defineStore("global", {
  state: (): State => ({
    dynamicPageInfo: getDynamicPageInfo(),
    theme: getTheme(),
    tabs: getTabs(),
    activeTab: getActiveTab(),
    activePage: {} as PageInfo,
    isAsideOpen: getAsideOpen(),
  }),
  actions: {
    storeTheme(theme: keyof typeof Theme) {
      this.theme = theme;
    },
    storeActiveTab(activeTab: number) {
      this.activeTab = activeTab;
    },
    storeTabs(tabs: Tab[]) {
      this.tabs = tabs;
    },
    storeDynamicPageInfo({
      fontFamily,
      fontSize,
      pageSize,
    }: {
      fontFamily?: keyof typeof FontFamily;
      fontSize?: keyof typeof FontSize;
      pageSize?: keyof typeof PageSize;
    }) {
      const currentPageId = this.activePage.id;
      let stts = this.getDynamicCurrentPageInfo?.settings || {
        fontFamily: "font-roboto",
        fontSize: "font-size-default",
        pageSize: "page-default-width",
      };

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

      if (currentPageId) {
        let pageInfo = {};

        if (this.dynamicPageInfo) {
          pageInfo = {
            ...this.dynamicPageInfo,
            [`${currentPageId}`]: {
              settings: stts,
            },
          };
        }

        this.dynamicPageInfo = pageInfo;
      }
    },
    storeCreated() {
      const dp = this.dynamicPageInfo;

      Object.entries(dp).forEach((d) => {
        const dCopy = { ...d };

        if (!d[1].created) {
          dCopy[1].created = new Date();
          return dCopy;
        }

        return dCopy;
      });
    },
    storeActivePage(activePage: PageInfo) {
      this.activePage = activePage;
    },
    storeIsAsideOpen(isAsideOpen: boolean) {
      this.isAsideOpen = isAsideOpen;
    },
    storeUpdateTabs(page: PageInfo) {
      const tabs = [...this.tabs];

      const tabActivePage = {
        pageId: page.id,
        pageName: page.title,
        pagePath: page.path,
      };

      if (tabs.length === 0) {
        this.storeTabs([tabActivePage]);
      } else {
        tabs[this.activeTab] = tabActivePage;
        this.storeTabs(tabs);
      }
    },
  },
  getters: {
    getDynamicPageInfo: (state) => state.dynamicPageInfo,
    getTheme: (state) => state.theme,
    getTabs: (state) => state.tabs,
    getActiveTab: (state) => state.activeTab,
    getDynamicCurrentPageInfo: (state) => {
      const page = state.tabs[state.activeTab];
      if (!page?.pageId) return;
      return (
        state.dynamicPageInfo[`${page.pageId}`] || {
          settings: {
            fontFamily: "font-roboto",
            fontSize: "font-size-default",
            pageSize: "page-default-width",
          },
        }
      );
    },
    getActivePage: (state) => state.activePage,
    getIsAsideOpen: (state) => state.isAsideOpen,
  },
})(piniaInstance);

export default useStore;
