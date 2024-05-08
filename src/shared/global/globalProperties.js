import { ref, computed, reactive } from "vue";
import store from "store";
import { tabs, setTabs } from "util/util";

export const globalProperties = reactive({
  fontStyle: "",
  fontSize: "",
  pageWidth: "",
  tabs: [],
  activeTab: 0,
  activePageModal: null,
});

export function setGlobalSettings(page) {
  setGlobalProperty("fontStyle", page.pageSettings.fontStyle);
  setGlobalProperty("fontSize", page.pageSettings.fontSize);
  setGlobalProperty("pageWidth", page.pageSettings.pageWidth);
}

export function setGlobalProperty(property, propertyValue) {
  globalProperties[property] = propertyValue;
}

export const getGlobalProperties = computed(() => {
  return {
    fontStyle: globalProperties.fontStyle,
    fontSize: globalProperties.fontSize,
    pageWidth: globalProperties.pageWidth,
    tabs: globalProperties.tabs,
    activeTab: globalProperties.activeTab,
    activePageModal: globalProperties.activePageModal,
  };
});

export const activePage = computed(() => {
  return store.getters.getActivePage;
});

export const icons = computed(() => {
  return store.getters.getIcons;
});

export const mainContainerDefault = ref(true);
export const mainContentDefault = ref(true);

export const mainContainerClasses = computed(() => {
  return {
    "main-container-default": mainContainerDefault.value,
    "main-container-click": !mainContainerDefault.value,
  };
});

export const mainContentClasses = computed(() => {
  return {
    "main-content-default": mainContentDefault.value,
    "main-content-click": !mainContentDefault.value,
  };
});

export function updateRoute(page) {
  tabs[getGlobalProperties.value.activeTab] = page;
  setTabs(tabs);
  setGlobalProperty("tabs", tabs);
  document.body.style.pointerEvents = "auto";
}
