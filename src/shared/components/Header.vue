<template>
  <header class="header">
    <div class="header-content">
      <div class="header-page" v-if="activePage">
        <img
          :src="activePage.pageIcon"
          style="max-width: 1.1rem; height: auto"
        />
        <span>{{ activePage.pageName }}</span>
      </div>
      <div class="header-btn" role="button" id="header-btn" @click="showModal">
        <DotsSvg />
      </div>
    </div>
  </header>

  <Modal ref="modalRef">
    <div class="header-menu-wrapper" id="header-menu-wrapper">
      <div class="header-menu">
        <div class="pref-style" id="pref-style">
          <span>Style</span>
          <div class="pref-style__pref-fonts">
            <div
              class="pref-style__font-wrapper"
              @click="setFontStyle('font-roboto')"
              :class="{
                'pref-style__font-wrapper--active':
                  globalState.fontStyle === 'font-roboto',
              }"
            >
              <span class="pref-style__font">Ag</span>
              <span class="pref-style__font-name">Default</span>
            </div>
            <div
              class="pref-style__font-wrapper"
              @click="setFontStyle('font-roboto-serif')"
              :class="{
                'pref-style__font-wrapper--active':
                  globalState.fontStyle === 'font-roboto-serif',
              }"
            >
              <span class="pref-style__font">Ag</span>
              <span class="pref-style__font-name">Serif</span>
            </div>
            <div
              class="pref-style__font-wrapper"
              @click="setFontStyle('font-roboto-mono')"
              :class="{
                'pref-style__font-wrapper--active':
                  globalState.fontStyle === 'font-roboto-mono',
              }"
            >
              <span class="pref-style__font">Ag</span>
              <span class="pref-style__font-name">Mono</span>
            </div>
          </div>
        </div>

        <div class="pref">
          <div>
            <span>Small Text</span>
            <label
              class="pref__btn-toggle"
              role="button"
              @click="toggleFontSize()"
            >
              <input type="checkbox" v-model="isFontSizeActive" />
            </label>
          </div>
          <div>
            <span>Full width</span>
            <label
              class="pref__btn-toggle"
              role="button"
              @click="togglePageWidth()"
            >
              <input type="checkbox" v-model="isPageWidthActive" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import Modal from "components/Modal.vue";
import useModal from "hooks/useModal";
import DotsSvg from "components/icons/Dots.vue";
import {
  updateFontSize,
  updateFontStyle,
  updatePageWidth,
  globalState,
} from "@/globalState.js";
import { ref, provide } from "vue";
import { computedVariables } from "util/variable";
import { useStore } from "vuex";

const store = useStore();
const modal = ref(null);
const { showModal, provideName } = useModal(modal);
const { activePage } = computedVariables;
const fontSizeSmall = ref("font-size-small");
const pageFullWidth = ref("page-full-width");
const isFontSizeActive = ref(false);
const isPageWidthActive = ref(false);

provide(provideName, modal);

const updateUserPref = (pageName, prefToUpdate, valueToUpdate) => {
  store.commit("storeUserPreference", {
    pageName: pageName,
    prefToUpdate: prefToUpdate,
    valueToUpdate: valueToUpdate,
  });
};

const setFontStyle = (font) => {
  updateFontStyle(font);
  updateUserPref(activePage._value.pageName, "fontStyle", font);
};

const toggleFontSize = () => {
  if (isFontSizeActive.value) {
    updateFontSize("");
    isFontSizeActive.value = false;
  } else {
    updateFontSize(fontSizeSmall.value);
    isFontSizeActive.value = true;
  }

  updateUserPref(activePage._value.pageName, "fontSize", globalState.fontSize);
};

const togglePageWidth = () => {
  if (isPageWidthActive.value) {
    updatePageWidth("");
    isPageWidthActive.value = false;
  } else {
    updatePageWidth(pageFullWidth.value);
    isPageWidthActive.value = true;
  }

  updateUserPref(
    activePage._value.pageName,
    "pageWidth",
    globalState.pageWidth
  );
};
</script>

<style lang="scss">
@import "@/assets/scss/main";

.header-menu {
  position: fixed;
  box-shadow: $box-shadow-1;
  border-radius: 3%;
  outline: none;
  animation: fadeIn 0.4s ease-in-out;
  animation-fill-mode: forwards;
  z-index: 999;
  background-color: $white;
  top: 38px;
  right: 6px;

  .pref-style {
    border-bottom: 1px solid $black-1;
    padding: 1rem 0.5rem 1rem;
    @include flex-layout($row-gap: 1rem);

    > span {
      font-size: $fs-small;
      color: $black-6;
      font-weight: $fw-600;
    }

    &__pref-fonts {
      @include grid-layout(repeat(3, 1fr), $column-gap: 0.8rem);
    }

    &__font-wrapper {
      @include flex-layout($row-gap: 0.5rem);
      align-items: center;
      border-radius: 5%;
      padding: 0.5rem 0.9rem;
      cursor: pointer;
      transition: background-color 0.2s;

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
        .pref-style__font {
          color: $active;
        }
      }
    }

    &__font {
      color: $black-6;
      font-stretch: condensed;
      font-size: $fs-x-large;
    }

    &__font-name {
      color: $black-4;
      font-weight: $fw-600;
      font-size: $fs-x-small;
    }
  }

  .pref {
    padding: 1rem 0.8rem 1.2rem;
    @include flex-layout($row-gap: 1.2rem);

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > span {
        color: $black-7;
        font-size: $fs-small;
      }
    }

    &__btn-toggle {
      display: inline-block;
      @include sizing(38px, 22px);
      border-radius: 34px;
      background-color: $gray-stroke;
      position: relative;
      cursor: pointer;

      > input {
        @include sizing(0, 0);
        position: absolute;
        cursor: pointer;

        &:checked {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }

        &:not(:checked)::before,
        &:checked::after {
          @extend .toggle-btn;
        }

        &:not(:checked)::before {
          top: -2px;
          left: -3px;
        }

        &:checked::after {
          top: -2px;
          left: -14px;
        }

        &:checked::before {
          content: "";
          @include sizing(38px, 22px);
          background-color: $active;
          position: absolute;
          border-radius: 34px;
          top: -3px;
          right: -8px;
        }
      }
    }
  }
}

.header-content {
  display: flex;
  user-select: none;
  justify-content: space-between;
  background-color: $white;

  .header-page {
    @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
    align-items: center;
  }

  .header-btn {
    @extend .navbar-btn;
  }

  .page-banner {
    width: 100%;
    height: 210px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
