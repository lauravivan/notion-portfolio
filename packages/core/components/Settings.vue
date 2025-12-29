<script setup lang="ts">
import { FontFamily } from "@core/enum";
import { useToggle } from "@core/hooks";
import { useStore } from "@core/store";
import { watch } from "vue";
import Modal from "./Modal/Modal.vue";
import ToggleBtn from "./ToggleBtn.vue";
import { storeToRefs } from "pinia";

const store = useStore;

const { getDynamicPageInfo } = storeToRefs(store);

const props = defineProps<{
  hideSettingsModal: () => void;
  addSettingsModalListener: () => void;
  menuProvider: string;
  modalStyles: { top: string; right: string };
  pageId: string;
}>();

const PAGE_SIZE_PROVIDE_NAME = "pageSize";
const FONT_SIZE_PROVIDE_NAME = "fontSize";

const fontFamilyEntries = Object.entries(FontFamily) as [
  keyof typeof FontFamily,
  string,
][];

const { active: activeFontSize, toToggle: toToggleFontSize } = useToggle({
  provideName: FONT_SIZE_PROVIDE_NAME,
  isActive:
    getDynamicPageInfo.value[props.pageId]?.settings.fontSize ===
    "font-size-small",
});

const { active: activePageSize, toToggle: toTogglePageSize } = useToggle({
  provideName: PAGE_SIZE_PROVIDE_NAME,
  isActive:
    getDynamicPageInfo.value[props.pageId]?.settings.pageSize ===
    "page-full-width",
});

watch(activePageSize, (newPageSize) => {
  store.storeDynamicPageInfo({
    pageSize: newPageSize ? "page-full-width" : "page-default-width",
  });
});

watch(activeFontSize, (newFontSize) => {
  store.storeDynamicPageInfo({
    fontSize: newFontSize ? "font-size-small" : "font-size-default",
  });
});
</script>

<template>
  <Modal
    class="modal-settings"
    :provideName="props.menuProvider"
    :hideModal="props.hideSettingsModal"
    :addModalListener="props.addSettingsModalListener"
    :modalStyles="props.modalStyles"
  >
    <div class="modal-settings__style">
      <span>Style</span>
      <div class="modal-settings__fonts">
        <div
          v-for="[key, value] in fontFamilyEntries"
          :key="key"
          class="modal-settings__font-wrapper"
          @click="store.storeDynamicPageInfo({ fontFamily: key })"
          :class="{
            'modal-settings__font-wrapper--active':
              (!store.getDynamicPageInfo[props.pageId]?.settings.fontFamily &&
                key === 'font-roboto') ||
              store.getDynamicPageInfo[props.pageId]?.settings.fontFamily ===
                key,
          }"
        >
          <span class="modal-settings__ag">Ag</span>
          <span class="modal-settings__font-name">{{ value }}</span>
        </div>
      </div>
    </div>

    <div class="modal-settings__size-and-width">
      <ToggleBtn
        :provideName="FONT_SIZE_PROVIDE_NAME"
        :active="activeFontSize"
        :toToggle="toToggleFontSize"
        >Small Text</ToggleBtn
      >
      <ToggleBtn
        :provideName="PAGE_SIZE_PROVIDE_NAME"
        :active="activePageSize"
        :toToggle="toTogglePageSize"
        >Full width</ToggleBtn
      >
    </div>
  </Modal>
</template>

<style lang="scss">
.modal-settings {
  &__style {
    padding: 0.5rem 0;
    border-bottom: 1px solid $black-1;

    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    > span {
      font-size: $fs-xs;
      color: $black-6;
      font-weight: $fw-600;
    }
  }

  &__ag {
    color: $black-6;
    font-stretch: condensed;
    font-size: $fs-large;
  }

  &__font-name {
    color: $black-4;
    font-weight: $fw-600;
    font-size: $fs-xs;
  }

  &__fonts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  &__font-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    align-items: center;
    border-radius: 5%;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 5px 3px;

    &:nth-child(1) {
      font-family: $default;
    }

    &:nth-child(2) {
      font-family: $serif;
    }

    &:nth-child(3) {
      font-family: $mono;
    }

    &:hover {
      background-color: $gray-4;
    }

    &--active {
      animation: blink 1s;

      .modal-settings__ag {
        color: $active;
      }
    }
  }

  &__size-and-width {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    padding: 1rem 0.2rem 0.5rem;

    @media (max-width: $screen-xs) {
      display: none;
    }
  }
}
</style>
