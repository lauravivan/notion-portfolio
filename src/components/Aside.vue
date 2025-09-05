<template>
  <aside :class="asideClasses">
    <div class="nav-wrapper" @mouseenter="toggleNavHover(true)">
      <nav :class="navClasses">
        <div
          class="nav-btn"
          role="button"
          id="nav-btn"
          @click="toggleNavState"
          @mouseenter="toggleNavHover(true)"
          @touchstart="toggleNavState"
        >
          <Icon :icon="navBtnIcon" />
        </div>
        <div class="nav-list-wrapper">
          <ul class="nav-list">
            <li class="nav-list__nav-item">
              <span>{{ store.getters.getProjectAuthor }}</span>
              {{ store.getters.getAuthorSocialMedia }}
            </li>
            <li class="nav-list__nav-item">
              <div role="button" @click="showSearchModal">
                <Icon :icon="icons.search" />
                <span>Search</span>
              </div>
              <div role="button" id="settings-btn" @click="showSettingsModal">
                <Icon :icon="icons.settings" />
                <span>Settings</span>
              </div>
            </li>
            <li class="nav-list__nav-item">
              <div class="nav-list__nav-item--category">Favorites</div>
              <NestedLink
                :pages="[pages.about, pages.contact, pages.projects]"
              />
            </li>
            <li class="nav-list__nav-item">
              <div class="nav-list__nav-item--category">Private</div>
              <NestedLink
                :pages="[
                  pages.github,
                  pages.certificates,
                  pages.honors,
                  pages.publications,
                  pages.reference,
                ]"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div
      style="
        position: absolute;
        top: -47px;
        left: 230px;
        width: 600px;
        height: 100vh;
      "
      :style="{ display: navHover ? 'block' : 'none' }"
      @mouseenter="toggleNavHover()"
    ></div>
  </aside>
  <Teleport to="body">
    <Modal
      :provideName="SETTINGS_MODAL_PROVIDE"
      :addModalListener="addSettingsModalListener"
      :hideModal="hideSettingsModal"
      :isStatic="true"
    >
      <div class="modal__settings">
        <h2 class="modal__settings-title">My settings</h2>
        <Divider />
        <div class="modal__appearance">
          <div>
            <h3>Appearance</h3>
            <h4>Customize how Notion Portfolio looks on your device</h4>
          </div>
          <div>
            <SelectBtn
              :options="themes"
              :menuProvideName="THEME_OPTIONS_PROVIDE"
              :optionSelected="theme"
              @toSelect="toggleTheme"
            />
          </div>
        </div>
      </div>
    </Modal>

    <Modal
      :provideName="SEARCH_MODAL_PROVIDE"
      :addModalListener="addSearchModalListener"
      :hideModal="hideSearchModal"
    >
      <div>Not build yet</div>
    </Modal>
  </Teleport>
</template>

<script setup lang="ts">
import Modal from "@/components/Modal.vue";
import { ref, computed, watch, inject, Ref } from "vue";
import useModal from "@/hooks/useModal";
import { useStore } from "vuex";
import { isTouchDevice } from "@/util/isTouchDevice";
import Divider from "@/components/Divider.vue";
import Icon from "@/components/Icon.vue";
import SelectBtn from "@/components/SelectBtn.vue";
import NestedLink from "@/components/NestedLink.vue";
import { ASIDE_MAIN_CONTAINER, ASIDE_MAIN_CONTENT } from "@/util/constants";
import { Theme } from "@/types/theme";

const store = useStore();
const icons = computed(() => store.getters.getIcons);
const themes = computed<string[]>(() =>
  store.getters.getThemesOptions.map(
    (theme: { id: string; name: string }) => theme.name
  )
);
const theme = computed<Theme>(() => store.getters.getTheme);
const pages = computed(() => {
  return store.getters.getPages;
});
const SETTINGS_MODAL_PROVIDE = "settingsModal";
const SEARCH_MODAL_PROVIDE = "searchModal";
const THEME_OPTIONS_PROVIDE = "themesMenu";
const navDefault = ref(true);
const navHover = ref(false);
const navClick = ref(false);
const asideDefault = ref(true);
const navBtnIcon = ref(icons.value.sandwich);
const mainContainerDefault = inject<Ref<boolean>>(ASIDE_MAIN_CONTAINER);
const mainContentDefault = inject<Ref<boolean>>(ASIDE_MAIN_CONTENT);

const asideClasses = computed(() => {
  return {
    "aside-default": asideDefault.value,
    "aside-click": !asideDefault.value,
  };
});

const navClasses = computed(() => {
  return {
    "nav-default": navDefault.value,
    "nav-hover": navHover.value,
    "nav-click": navClick.value,
  };
});

const {
  showModal: showSettingsModal,
  hideModal: hideSettingsModal,
  addModalListener: addSettingsModalListener,
} = useModal({ provideName: SETTINGS_MODAL_PROVIDE });

const {
  showModal: showSearchModal,
  hideModal: hideSearchModal,
  addModalListener: addSearchModalListener,
} = useModal({ provideName: SEARCH_MODAL_PROVIDE });

function toggleTheme(name: string) {
  const t = computed(() => store.getters.getThemesOptions);
  store.commit(
    "storeTheme",
    t.value.find((theme: { id: string; name: string }) => theme.name === name)
      .id
  );
}

function togglePageState(isDefault = true) {
  asideDefault.value = isDefault;

  if (mainContainerDefault && mainContentDefault) {
    mainContainerDefault.value = isDefault;
    mainContentDefault.value = isDefault;
  }
}

function toggleNavState() {
  navClick.value ? togglePageState() : togglePageState(false);

  if (navClick.value) {
    navDefault.value = true;
    navClick.value = false;

    if (!isTouchDevice()) {
      navHover.value = true;
    }
  } else {
    navDefault.value = false;
    navHover.value = false;
    navClick.value = true;
  }
}

function toggleNavHover(toShow = false) {
  if (asideDefault.value) {
    isTouchDevice() ? (navHover.value = false) : (navHover.value = toShow);
  }
}

watch(navClasses, (currentClass) => {
  if (currentClass["nav-hover"]) {
    navBtnIcon.value = icons.value.doubleArrowRight;
  } else if (currentClass["nav-default"]) {
    navBtnIcon.value = icons.value.sandwich;
  } else if (currentClass["nav-click"]) {
    navBtnIcon.value = icons.value.doubleArrowLeft;
  }
});
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;
@use "@/assets/scss/_var" as var;

.nav-wrapper,
.nav-default,
.nav-hover,
.nav-click,
.nav-list-wrapper {
  height: 100%;
}

.nav-wrapper {
  color: var.$black-6;
  user-select: none;

  .nav-btn {
    @extend .button;
    margin-left: 13px;
  }

  .nav-default .nav-list {
    display: none;
  }

  .nav-hover {
    @include mixin.flex-layout($row-gap: 2rem);
    border-radius: 3px;

    .nav-list {
      box-shadow: var.$box-shadow-1;
      @include mixin.spacing($mt: 0.1rem, $pb: 0.6rem);
      transform: translateX(-100%);
      animation: slideIn 0.4s ease-in-out;
      animation-fill-mode: forwards;
      padding-right: 1rem;
      background-color: var.$white;
      border-radius: 5px;
      height: min-content;
      max-height: 75%;

      &__nav-item {
        width: 100%;
      }
    }
  }

  .nav-click {
    @include mixin.flex-layout($flex-direction: row-reverse, $row-gap: 2rem);

    &:hover {
      .nav-btn {
        visibility: visible;
      }
    }

    .nav-btn {
      visibility: hidden;
      position: absolute;
      left: 78%;
      z-index: 2;
      margin: 0.7rem 0.9rem 0;
    }

    .nav-list {
      position: absolute;
      inset: 0;
      z-index: 1;
    }
  }

  .nav-hover,
  .nav-click {
    .nav-list {
      @include mixin.flex-layout($row-gap: 1.5rem);
      font-size: var.$fs-small;

      &__nav-item:nth-child(1) {
        @include mixin.flex-layout($row-gap: 0.3rem);
        font-size: var.$fs-xs;
        @include mixin.spacing($ml: 0.8rem, $pt: 0.9rem);

        span {
          color: var.$black;
          font-size: var.$fs-medium;
        }
      }

      &__nav-item:nth-child(2) {
        @include mixin.flex-layout($row-gap: 0.2rem);
        margin: 10px 0.6rem;

        & > div {
          @include mixin.flex-layout($flex-direction: row, $column-gap: 0.4rem);
          align-items: center;
          @extend .hover-default;
        }
      }

      &__nav-item:nth-child(3),
      &__nav-item:nth-child(4) {
        margin: 10px 0.7rem;
        min-height: 80px;
        height: auto;
        overflow-y: auto;
        overflow-x: hidden;
      }

      &__nav-item--category {
        margin-bottom: 0.6rem;
        font-weight: var.$fw-600;
        font-size: var.$fs-xs + 0.1rem;
      }
    }
  }
}

.modal {
  width: 70%;

  &__settings {
    @include mixin.flex-layout($row-gap: 20px);
  }

  &__settings-title {
    font-weight: var.$fw-600;
  }

  &__appearance {
    @include mixin.flex-layout($flex-direction: row);
    justify-content: space-between;

    div:nth-child(1) {
      h3,
      h4 {
        word-break: break-all;
      }
    }

    h3 {
      margin-bottom: 6px;
    }

    h4 {
      font-size: var.$fs-small;
      color: var.$black-6;
    }
  }
}
</style>
