import { computed, reactive } from "vue";
import { getActiveTab as getActiveTabLS, getTabs as getTabsLS } from "@/core/util/local-storage";

export const globalProperties = reactive<Global>({
  fontStyle: "font-roboto",
  smallText: false,
  fullWidth: false,
  tabs: getTabsLS(),
  activeTab: getActiveTabLS(),
});

export function setGlobalProperty<K extends keyof Global>(
  property: K,
  propertyValue: Global[K]
) {
  globalProperties[property] = propertyValue;
}

export const getGlobalProperties = computed(() => {
  return {
    fontStyle: globalProperties.fontStyle,
    smallText: globalProperties.smallText,
    fullWidth: globalProperties.fullWidth,
    tabs: globalProperties.tabs,
    activeTab: globalProperties.activeTab,
  };
});
