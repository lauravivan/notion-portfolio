<template>
  <header class="header">
    <div class="header__content">
      <Breadcrumb />
      <div
        class="header__btn"
        role="button"
        id="header-btn"
        @click="showHeaderMenu"
      >
        <Icon :icon="icons.dotsHoriz" />
      </div>
    </div>
  </header>

  <Menu
    class="header-menu"
    :provideName="'headerMenu'"
    :menuStyles="{ top: '77px', right: '10px' }"
  >
    <div class="header-menu__style">
      <span>Style</span>
      <div class="header-menu__fonts">
        <div
          v-for="font in store.getters.getFontsOptions"
          class="header-menu__font-wrapper"
          @click="setFontStyle(font.id)"
          :class="{
            'header-menu__font-wrapper--active': globalFontStyle === font.id,
          }"
        >
          <span class="header-menu__ag">Ag</span>
          <span class="header-menu__font-name">{{ font.name }}</span>
        </div>
      </div>
    </div>

    <div class="header-menu__size-and-width">
      <ToggleOption @click="toToggleSize" :provideName="'toggleSize'"
        >Small Text</ToggleOption
      >
      <ToggleOption @click="toToggleWidth" :provideName="'toggleWidth'"
        >Full width</ToggleOption
      >
    </div>
  </Menu>
</template>

<script setup>
import Icon from "UIElements/Icon.vue";
import { ref, provide, watch } from "vue";
import { useStore } from "vuex";
import Menu from "components/Menu.vue";
import useModal from "hooks/useModal";
import { activePage, icons, setGlobalProperty, globalFontStyle } from "global";
import Breadcrumb from "UIElements/Breadcrumb.vue";
import ToggleOption from "components/ToggleOption.vue";

const store = useStore();
const headerMenuRef = ref(null);
const toggleSizeRef = ref(null);
const toggleWidthRef = ref(null);
const { showModal } = useModal();

provide("headerMenu", headerMenuRef);
provide("toggleSize", toggleSizeRef);
provide("toggleWidth", toggleWidthRef);

function showHeaderMenu() {
  showModal(headerMenuRef);
}

function updateUserPref(pageKey, prefToUpdate, valueToUpdate) {
  store.commit("storeUserPreference", {
    pageKey: pageKey,
    prefToUpdate: prefToUpdate,
    valueToUpdate: valueToUpdate,
  });
}

function setFontStyle(font) {
  updateUserPref(activePage.value.key, "fontStyle", font);
  setGlobalProperty("fontStyle", font);
}

function toToggleUserPref(toggleRef, pref, prefValue) {
  const isActive = toggleRef.value.classList.contains("toggle-btn--active");

  if (isActive) {
    updateUserPref(activePage.value.key, pref, prefValue);
    setGlobalProperty(pref, prefValue);
  } else {
    updateUserPref(activePage.value.key, pref, "");
    setGlobalProperty(pref, "");
  }
}

function toToggleSize() {
  toToggleUserPref(
    toggleSizeRef,
    "fontSize",
    store.getters.getFontSizeOptions[0]
  );
}

function toToggleWidth() {
  toToggleUserPref(
    toggleWidthRef,
    "pageWidth",
    store.getters.getPageWidthOptions[0]
  );
}

watch(activePage, (currentValue) => {
  const active = "toggle-btn--active";

  if (currentValue.pageSettings.fontSize) {
    toggleSizeRef.value.classList.add(active);
  } else {
    toggleSizeRef.value.classList.remove(active);
  }

  if (currentValue.pageSettings.pageWidth) {
    toggleWidthRef.value.classList.add(active);
  } else {
    toggleWidthRef.value.classList.remove(active);
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.header {
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

.header-menu {
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
