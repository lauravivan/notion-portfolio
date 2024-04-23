import { ref, computed, reactive } from "vue";
import store from "store";

export const globalProperties = reactive({
  fontStyle: "",
  fontSize: "",
  pageWidth: "",
});

export function setGlobalProperties(page) {
  setGlobalProperty("fontStyle", page.pageSettings.fontStyle);
  setGlobalProperty("fontSize", page.pageSettings.fontSize);
  setGlobalProperty("pageWidth", page.pageSettings.pageWidth);
}

export function setGlobalProperty(setts, settsValue) {
  globalProperties[setts] = settsValue;
}

export const globalFontStyle = computed(() => {
  return globalProperties.fontStyle;
});

export const globalFontSize = computed(() => {
  return globalProperties.fontSize;
});

export const globalPageWidth = computed(() => {
  return globalProperties.pageWidth;
});

export const mainContainerDefault = ref(true);
export const mainContentDefault = ref(true);

export const activePage = computed(() => {
  return store.getters.getActivePage;
});

export const icons = computed(() => {
  return store.getters.getIcons;
});

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
