<script setup lang="ts">
import { useModal, useToggle } from "@core/hooks";
import { Breadcrumb, Modal } from "@core/@client/components";
import { useStore } from "@core/store";
import ToggleBtn from "@core/components/ToggleBtn.vue";
import { FontFamily, Icons } from "@core/enum";
import { watch } from "vue";
import Icon from "@core/@client/components/Icon.vue";
import type { IMetadata } from "@core/@types";

const props = defineProps<{ metadata: IMetadata }>();

const store = useStore;

const PAGE_SIZE_PROVIDE_NAME = "pageSize";
const FONT_SIZE_PROVIDE_NAME = "fontSize";
const HEADER_MENU_PROVIDE_NAME = "headerMenu";

const fontFamilyEntries = Object.entries(FontFamily) as [
  keyof typeof FontFamily,
  string,
][];

const { active: activeFontSize, toToggle: toToggleFontSize } = useToggle({
  provideName: FONT_SIZE_PROVIDE_NAME,
  isActive:
    store.getDynamicCurrentPageInfo?.settings.fontSize === "font-size-small",
});

const { active: activePageSize, toToggle: toTogglePageSize } = useToggle({
  provideName: PAGE_SIZE_PROVIDE_NAME,
  isActive:
    store.getDynamicCurrentPageInfo?.settings.pageSize === "page-full-width",
});

const {
  showModal: showMenuModal,
  hideModal: hideMenuModal,
  addModalListener: addMenuModalListener,
} = useModal({
  provideName: HEADER_MENU_PROVIDE_NAME,
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
  <header class="header">
    <div class="header__content">
      <Breadcrumb :metadata="props.metadata" />
      <div></div>
      <div
        class="header__btn"
        role="button"
        id="header-btn"
        @click="showMenuModal"
      >
        <Icon :icon="Icons.moreHorizontal" />
      </div>
    </div>
  </header>

  <Modal
    class="header-menu"
    :provideName="HEADER_MENU_PROVIDE_NAME"
    :hideModal="hideMenuModal"
    :addModalListener="addMenuModalListener"
    :modalStyles="{ top: '77px', right: '10px' }"
  >
    <div class="header-menu__style">
      <span>Style</span>
      <div class="header-menu__fonts">
        <div
          v-for="[key, value] in fontFamilyEntries"
          :key="key"
          class="header-menu__font-wrapper"
          @click="store.storeDynamicPageInfo({ fontFamily: key })"
          :class="{
            'header-menu__font-wrapper--active':
              (!store.getDynamicCurrentPageInfo?.settings.fontFamily &&
                key === 'font-roboto') ||
              store.getDynamicCurrentPageInfo?.settings.fontFamily === key,
          }"
        >
          <span class="header-menu__ag">Ag</span>
          <span class="header-menu__font-name">{{ value }}</span>
        </div>
      </div>
    </div>

    <div class="header-menu__size-and-width">
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
.app .header {
  background-color: $white;
  height: $HEADER_HEIGHT;

  &__content {
    display: flex;
    user-select: none;
    justify-content: space-between;
  }

  &__btn {
    @extend .button;
  }
}

.app .header-menu {
  &__style {
    padding: 0.5rem 0;
    border-bottom: 1px solid $black-1;
    @include flex-layout($row-gap: 1rem);

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
    @include grid-layout(repeat(3, 1fr));
  }

  &__font-wrapper {
    @include flex-layout($row-gap: 0.5rem);
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

      .header-menu__ag {
        color: $active;
      }
    }
  }

  &__size-and-width {
    @include flex-layout($row-gap: 0.5rem);
    padding: 1rem 0.2rem 0.5rem;

    @media (max-width: $screen-xs) {
      display: none;
    }
  }
}
</style>
