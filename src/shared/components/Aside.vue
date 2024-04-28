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
              <NestedLink :pages="pagesInfo" />
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
      :style="{ display: displayNavHoverOut }"
      @mouseenter="toggleNavHover()"
    ></div>
  </aside>
  <Teleport to="body">
    <Modal :provideName="'settingsModal'">
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
              :options="store.getters.getThemesOptions.map((obj) => obj.name)"
              :menuProvideName="'themesMenu'"
              :optionSelected="getThemeIndex"
              @click="showThemesMenu"
              @toSelect="toggleTheme"
            />
          </div>
        </div>
      </div>
    </Modal>

    <Modal :provideName="'searchModal'">
      <div>Not build yet</div>
    </Modal>
  </Teleport>
</template>

<script setup>
import Modal from "components/Modal.vue";
import { provide, ref, computed, watch, onMounted } from "vue";
import useModal from "hooks/useModal";
import { useStore } from "vuex";
import { mainContainerDefault, mainContentDefault, icons } from "global";
import { isTouchDevice } from "util/util";
import Divider from "UIElements/Divider.vue";
import Icon from "UIElements/Icon.vue";
import SelectBtn from "components/SelectBtn.vue";
import NestedLink from "components/NestedLink.vue";

const store = useStore();

const settingsModalRef = ref(null);
const searchModalRef = ref(null);
const themesMenuRef = ref(null);
const themesListRef = ref(null);
const { showModal, hideModal } = useModal();
const displayNavHoverOut = ref("none");

provide("settingsModal", settingsModalRef);
provide("searchModal", searchModalRef);
provide("themesMenu", themesMenuRef);
provide("themesList", themesListRef);

const navDefault = ref(true);
const navHover = ref(false);
const navClick = ref(false);
const asideDefault = ref(true);
const navBtnIcon = ref(icons.value.sandwich);
const body = document.body;

const getThemeIndex = computed(() => {
  const themesOptions = store.getters.getThemesOptions;
  const themeChosen = localStorage.getItem("pageTheme") || "";

  if (themeChosen) {
    for (const index in themesOptions) {
      if (themesOptions[index].id == themeChosen) {
        return index;
      }
    }
  }

  return 0;
});

function toggleTheme(index) {
  const themesOptions = store.getters.getThemesOptions;

  for (const i in themesOptions) {
    if (i == index) {
      setBodyTheme(themesOptions[i].id);
    }
  }
}

function showSettingsModal() {
  showModal(settingsModalRef);
}

function showSearchModal() {
  showModal(searchModalRef);
}

function showThemesMenu() {
  showModal(themesMenuRef);
}

function setBodyTheme(theme) {
  body.className = "";
  body.classList.add(theme);
  localStorage.setItem("pageTheme", theme);
  hideModal(themesMenuRef);
}

const pagesInfo = computed(() => {
  return store.getters.getPagesInfo;
});

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

function togglePageState(isDefault = true) {
  asideDefault.value = isDefault;
  mainContainerDefault.value = isDefault;
  mainContentDefault.value = isDefault;
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

  navHover.value
    ? (displayNavHoverOut.value = "block")
    : (displayNavHoverOut.value = "none");
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

onMounted(() => {
  const theme = localStorage.getItem("pageTheme");
  setBodyTheme(theme);
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

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
      max-height: 75%;

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
        margin: 10px 0.7rem;
        height: 60%;
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
  width: 70%;

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
