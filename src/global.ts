import { computed, reactive } from "vue";

export const globalProperties = reactive<Settings>({
  fontStyle: "font-roboto",
  smallText: false,
  fullWidth: false,
});

export function setGlobalProperty<K extends keyof Settings>(
  property: K,
  propertyValue: Settings[K]
) {
  globalProperties[property] = propertyValue;
}

export const getGlobalProperties = computed(() => {
  return {
    fontStyle: globalProperties.fontStyle,
    smallText: globalProperties.smallText,
    fullWidth: globalProperties.fullWidth,
  };
});
