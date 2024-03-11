import { ref, computed } from "vue";
import store from "store";

export const sharedVariables = {
  mainContainerDefault: ref(true),
  mainContentDefault: ref(true),
};

export const computedVariables = {
  mainContainerClasses: computed(() => {
    return {
      "main-container-default": sharedVariables.mainContainerDefault.value,
      "main-container-click": !sharedVariables.mainContainerDefault.value,
    };
  }),
  mainContentClasses: computed(() => {
    return {
      "main-content-default": sharedVariables.mainContentDefault.value,
      "main-content-click": !sharedVariables.mainContentDefault.value,
    };
  }),
  activePage: computed(() => {
    return store.getters.getActivePage;
  }),
};
