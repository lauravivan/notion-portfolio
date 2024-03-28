import { reactive, ref, computed } from "vue";
import store from "store";

export const globalProperties = reactive({
  fontSize: "",
  fontStyle: "",
  pageWidth: "",
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
