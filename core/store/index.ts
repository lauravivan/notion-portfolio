import { Theme } from "@core/enum";
import {
  getActiveTab,
  getSettings,
  getTabs,
  getTheme,
  setTheme,
} from "@core/util/local-storage";
import { defineStore } from "pinia";

// export const globalProperties = reactive<Global>({
//   fontStyle: "font-roboto",
//   smallText: false,
//   fullWidth: false,
//   tabs: getTabsLS(),
//   activeTab: getActiveTabLS(),
// });

// export function setGlobalProperty<K extends keyof Global>(
//   property: K,
//   propertyValue: Global[K]
// ) {
//   globalProperties[property] = propertyValue;
// }

// export const getGlobalProperties = computed(() => {
//   return {
//     fontStyle: globalProperties.fontStyle,
//     smallText: globalProperties.smallText,
//     fullWidth: globalProperties.fullWidth,
//     tabs: globalProperties.tabs,
//     activeTab: globalProperties.activeTab,
//   };
// });

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
    }
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
