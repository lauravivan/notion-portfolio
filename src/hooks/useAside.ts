import { ASIDE_MAIN_CONTAINER, ASIDE_MAIN_CONTENT } from "@/util/constants";
import { computed, provide, ref } from "vue";

export default function useAside() {
  const mainContainerDefault = ref(true);
  const mainContentDefault = ref(true);

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
  };
}
