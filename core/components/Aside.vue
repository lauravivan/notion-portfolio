<script setup lang="ts">
import { ref, computed, inject, type Ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useModal } from "../hooks";
import NestedLink from "./NestedLink.vue";
import { Modal, Divider, SelectBtn, Icon } from "../@client/components";
import { isTouchDevice } from "../util";
import useStore from "@core/store";
import { Icons, Theme } from "@core/enum";
import setAsideOpen from "@core/util/local-storage/aside/setAsideOpen";
import getAsideOpen from "@core/util/local-storage/aside/getAsideOpen";
import {
  ASIDE_MAIN_CONTAINER,
  ASIDE_MAIN_CONTENT,
} from "@core/constants/aside";

const store = useStore();
const isAsideOpen = getAsideOpen();
const SETTINGS_MODAL_PROVIDE = "settingsModal";
const SEARCH_MODAL_PROVIDE = "searchModal";
const THEME_OPTIONS_PROVIDE = "themesMenu";
const navDefault = ref(!isAsideOpen);
const navHover = ref(false);
const navClick = ref(isAsideOpen);
const navBtnIcon = ref(isAsideOpen ? Icons.doubleArrowLeft : Icons.sandwich);
const asideDefault = ref(!isAsideOpen);
const mainContainerDefault = inject<Ref<boolean>>(ASIDE_MAIN_CONTAINER);
const mainContentDefault = inject<Ref<boolean>>(ASIDE_MAIN_CONTENT);

const props = defineProps(["metadata"]);

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

function toggleTheme(theme: keyof typeof Theme) {
  store.storeTheme(theme);
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
    store.storeIsAsideOpen(false);

    if (!isTouchDevice()) {
      navHover.value = true;
    }
  } else {
    navDefault.value = false;
    navHover.value = false;
    navClick.value = true;
    store.storeIsAsideOpen(true);
  }
}

function toggleNavHover(toShow = false) {
  if (asideDefault.value) {
    isTouchDevice() ? (navHover.value = false) : (navHover.value = toShow);
  }
}

watch(navClasses, (currentClass) => {
  if (currentClass["nav-hover"]) {
    navBtnIcon.value = Icons.doubleArrowRight;
  } else if (currentClass["nav-default"]) {
    navBtnIcon.value = Icons.sandwich;
  } else if (currentClass["nav-click"]) {
    navBtnIcon.value = Icons.doubleArrowLeft;
  }
});

function saveAsideOpen() {
  setAsideOpen(store.isAsideOpen);
}

onMounted(() => {
  window.addEventListener("beforeunload", saveAsideOpen);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", saveAsideOpen);
});
</script>

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
              <span>{{ props.metadata.user.author }}</span>
              {{ props.metadata.user.socialMedia }}
            </li>
            <li class="nav-list__nav-item">
              <div role="button" @click="showSearchModal">
                <Icon :icon="Icons.search" />
                <span>Search</span>
              </div>
              <div role="button" id="settings-btn" @click="showSettingsModal">
                <Icon :icon="Icons.settings" />
                <span>Settings</span>
              </div>
            </li>
            <li class="nav-list__nav-item">
              <div class="nav-list__nav-item--category">Favorites</div>
              <NestedLink :pages="props.metadata.favorites" />
            </li>
            <li class="nav-list__nav-item">
              <div class="nav-list__nav-item--category">Private</div>
              <NestedLink :pages="props.metadata.pages" />
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
              :options="Object.entries(Theme)"
              :menuProvideName="THEME_OPTIONS_PROVIDE"
              :optionSelected="Theme[`${store.getTheme}`]"
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
      :isStatic="true"
    >
      <div>Not build yet</div>
    </Modal>
  </Teleport>
</template>

<style lang="scss">
.nav-wrapper,
.nav-default,
.nav-hover,
.nav-click,
.nav-list-wrapper {
  height: 100%;
}

.nav-wrapper {
  color: $black-6;
  user-select: none;

  .nav-btn {
    @extend .button;
    margin-left: 13px;
  }

  .nav-default .nav-list {
    display: none;
  }

  .nav-hover {
    @include flex-layout($row-gap: 2rem);
    border-radius: 3px;

    .nav-list {
      box-shadow: $box-shadow-1;
      @include spacing($mt: 0.1rem, $pb: 0.6rem);
      transform: translateX(-100%);
      animation: slideIn 0.4s ease-in-out;
      animation-fill-mode: forwards;
      padding-right: 1rem;
      background-color: $white;
      border-radius: 5px;
      height: min-content;
      max-height: 75vh;

      &__nav-item {
        width: 100%;
      }
    }
  }

  .nav-click {
    @include flex-layout($flex-direction: row-reverse, $row-gap: 2rem);

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
      @include flex-layout($row-gap: 1.5rem);
      font-size: $fs-small;

      &__nav-item:nth-child(1) {
        @include flex-layout($row-gap: 0.3rem);
        font-size: $fs-xs;
        @include spacing($ml: 0.8rem, $pt: 0.9rem);

        span {
          color: $black;
          font-size: $fs-medium;
        }
      }

      &__nav-item:nth-child(2) {
        @include flex-layout($row-gap: 0.2rem);
        margin: 10px 0.6rem;

        & > div {
          @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
          align-items: center;
          @extend .hover-default;
        }
      }

      &__nav-item:nth-child(3) {
        max-height: 140px;
      }

      &__nav-item:nth-child(3),
      &__nav-item:nth-child(4) {
        margin: 5px 0.7rem;
        height: auto;
        overflow-y: auto;
        overflow-x: hidden;
      }

      &__nav-item--category {
        margin-bottom: 0.6rem;
        font-weight: $fw-600;
        font-size: $fs-xs + 0.1rem;
      }
    }
  }
}

.modal {
  &__settings {
    @include flex-layout($row-gap: 20px);
  }

  &__settings-title {
    font-weight: $fw-600;
  }

  &__appearance {
    @include flex-layout($flex-direction: row);
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
      font-size: $fs-small;
      color: $black-6;
    }
  }
}
</style>
