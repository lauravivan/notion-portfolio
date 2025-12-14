import {
  ASIDE_MAIN_CONTAINER,
  ASIDE_MAIN_CONTENT,
} from "@core/constants/aside";
import { getAsideOpen } from "@core/util/local-storage";
import { computed, provide, ref } from "vue";

export default function useAside() {
  const isAsideOpen = getAsideOpen();
  const mainContainerDefault = ref(!isAsideOpen);
  const mainContentDefault = ref(!isAsideOpen);

  provide(ASIDE_MAIN_CONTAINER, mainContainerDefault);
  provide(ASIDE_MAIN_CONTENT, mainContentDefault);

  const mainContentClasses = computed(() => {
    return {
      "main-content-default": mainContentDefault.value,
      "main-content-click": !mainContentDefault.value,
    };
  });

  const mainContainerClasses = computed(() => {
    return {
      "main-container-default": mainContainerDefault.value,
      "main-container-click": !mainContainerDefault.value,
    };
  });

  return {
    mainContainerClasses,
    mainContentClasses,
    ASIDE_MAIN_CONTAINER,
    ASIDE_MAIN_CONTENT,
  };
}
