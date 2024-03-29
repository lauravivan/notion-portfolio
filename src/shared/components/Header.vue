<template>
  <header class="header">
    <div class="header__content">
      <div class="header__page" v-if="activePage">
        <router-link :to="activePage.pagePath">
          <div>
            <img
              :src="activePage.pageIcon"
              style="max-width: 1.1rem; height: auto"
            />
            <div>{{ activePage.pageName }}</div>
          </div>
        </router-link>
      </div>
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
    :menuStyles="{ top: '38px', right: '10px' }"
  >
    <div class="header-menu__style">
      <span>Style</span>
      <div class="header-menu__fonts">
        <div
          v-for="font in store.getters.getFontsOptions"
          class="header-menu__font-wrapper"
          @click="setFontStyle(font.id)"
          :class="{
            'header-menu__font-wrapper--active': activeFontStyle === font.id,
          }"
        >
          <span class="header-menu__ag">Ag</span>
          <span class="header-menu__font-name">{{ font.name }}</span>
        </div>
      </div>
    </div>

    <div class="header-menu__size-and-width">
      <div>
        <div>Small Text</div>
        <ToggleBtn
          :provideName="'toggleSize'"
          :isActive="isFontSizeActive"
          @click="toToggleSize"
        />
      </div>
      <div>
        <div>Full width</div>
        <ToggleBtn
          :provideName="'toggleWidth'"
          :isActive="isPageWidthActive"
          @click="toToggleWidth"
        />
      </div>
    </div>
  </Menu>
</template>

<script setup>
import Icon from "UIElements/Icon.vue";
import { ref, provide, onMounted } from "vue";
import { useStore } from "vuex";
import Menu from "components/Menu.vue";
import useModal from "hooks/useModal";
import ToggleBtn from "UIElements/ToggleBtn.vue";
import { globalProperties, activePage, icons } from "global";

const store = useStore();
const headerMenuRef = ref(null);
const toggleSizeRef = ref(null);
const toggleWidthRef = ref(null);
const { showModal } = useModal();
const isFontSizeActive = ref(false);
const isPageWidthActive = ref(false);
const activeFontStyle = ref("");
const fontSizeSmall = ref(store.getters.getFontSizeOptions[0]);
const pageFullWidth = ref(store.getters.getPageWidthOptions[0]);

provide("headerMenu", headerMenuRef);
provide("toggleSize", toggleSizeRef);
provide("toggleWidth", toggleWidthRef);

function showHeaderMenu() {
  showModal(headerMenuRef);
}

function updateUserPref(handle, prefToUpdate, valueToUpdate) {
  store.commit("storeUserPreference", {
    handle: handle,
    prefToUpdate: prefToUpdate,
    valueToUpdate: valueToUpdate,
  });
}

function setFontStyle(font) {
  activeFontStyle.value = font;
  updateUserPref(activePage.value.key, "fontStyle", font);
  globalProperties.fontStyle = font;
}

function toToggleSize() {
  const hasUnchecked = toggleSizeRef.value.classList.contains("unchecked");

  if (hasUnchecked) {
    updateUserPref(activePage.value.key, "fontSize", fontSizeSmall.value);
    isFontSizeActive.value = true;
    globalProperties.fontSize = fontSizeSmall.value;
  } else {
    updateUserPref(activePage.value.key, "fontSize", "");
    isFontSizeActive.value = false;
    globalProperties.fontSize = "";
  }
}

function toToggleWidth() {
  const hasUnchecked = toggleWidthRef.value.classList.contains("unchecked");

  if (hasUnchecked) {
    updateUserPref(activePage.value.key, "pageWidth", pageFullWidth.value);
    isFontSizeActive.value = true;
    globalProperties.pageWidth = pageFullWidth.value;
  } else {
    updateUserPref(activePage.value.key, "pageWidth", "");
    isFontSizeActive.value = false;
    globalProperties.pageWidth = "";
  }
}

function setConfigs() {
  if (activePage.value.pageWidth.length > 0) {
    isPageWidthActive.value = true;
    globalProperties.pageWidth = pageFullWidth.value;
  } else {
    globalProperties.pageWidth = "";
  }

  if (activePage.value.fontSize.length > 0) {
    isFontSizeActive.value = true;
    globalProperties.fontSize = fontSizeSmall.value;
  } else {
    globalProperties.fontSize = "";
  }

  activeFontStyle.value = activePage.value.fontStyle;
  globalProperties.fontStyle = activePage.value.fontStyle;
}

onMounted(() => {
  setTimeout(() => {
    setConfigs();
  }, 100);
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.header {
  background-color: $white;

  &__content {
    display: flex;
    user-select: none;
    justify-content: space-between;
  }

  &__page {
    a {
      all: unset;
      > div {
        @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
        align-items: center;
        @extend .hover-default;
      }
    }
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
    @include flex-layout($row-gap: 1.2rem);
    padding: 1rem 0.2rem 0.5rem;

    @media (max-width: $screen-xs) {
      display: none;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: $fs-xs;

      & > div {
        color: $black-7;
      }
    }
  }
}
</style>
