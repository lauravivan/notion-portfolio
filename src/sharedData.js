import { ref, computed } from 'vue'

export const sharedVariables = {
  mainContainerDefault: ref(true),
  mainContentDefault: ref(true),
  mainContainerOverlay: ref(false),
  robotoDefault: ref('font-roboto'),
  robotoSerif: ref('font-roboto-serif'),
  robotoMono: ref('font-roboto-mono'),
  fontSizeSmall: ref('font-size-small'),
  pageFullWidth: ref('page-full-width')
}

export const computedProperties = {
  mainContainerClasses: computed(() => 
  ({
    'main-container-default': sharedVariables.mainContainerDefault.value,
    'main-container-click': !sharedVariables.mainContainerDefault.value,
    'main-container-overlay': sharedVariables.mainContainerOverlay.value
  })),
  mainContentClasses: computed(() => 
  ({
    'main-content-default': sharedVariables.mainContentDefault.value,
    'main-content-click': !sharedVariables.mainContentDefault.value
  }))
}

export const getNodeClicked = (nodeList, clickedEle) => {
  return Array.from(nodeList).some((child) => child === clickedEle)
}