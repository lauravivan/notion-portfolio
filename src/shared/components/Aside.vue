<template>
  <aside :class="asideClasses">
    <div class="nav-wrapper" @mouseleave.prevent="hideNavList">
      <nav :class="navClasses">
        <div
          class="nav-btn"
          role="button"
          id="nav-btn"
          @click.prevent="navBtnClicked"
          @mouseenter.prevent="showNavList"
          @touchstart.prevent="navBtnTouched"
        >
          <nav-btn-icon :is="navBtnIcon"></nav-btn-icon>
        </div>
        <div class="nav-list-wrapper" @mouseover.prevent="showNavList">
          <ul class="nav-list">
            <li class="nav-list__nav-item">
              <span>{{ store.getters.getProjectAuthor }}</span>
              {{ store.getters.getAuthorSocialMedia }}
            </li>
            <li class="nav-list__nav-item">
              <div role="button">
                <SearchSvg />
                <span>Search</span>
              </div>
              <div role="button" id="settings-btn" @click="showModal">
                <SettingsSvg />
                <span>Settings</span>
              </div>
            </li>
            <li class="nav-list__nav-item">
              <LinksContainer
                :categoryName="'Favorites'"
                :categoryPages="store.getters.getPagesInfo.favorites"
              />
              <LinksContainer
                :categoryName="'Projects'"
                :categoryPages="store.getters.getPagesInfo.projects"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div
      style="width: 25px; height: 100%"
      @mouseleave.prevent="hideNavList"
    ></div>
  </aside>
  <Teleport to="body">
    <Modal ref="modalRef" :modalStyles="modalStyles">
      <span class="modal-title">Choose your theme</span>
      <div class="themes-wrapper">
        <div class="themes">
          <span class="themes__title">Light</span>
          <div class="themes__theme-wrapper">
            <div
              class="themes__theme themes__theme--light"
              @click="lightClicked"
            >
              <span class="themes__theme-name themes__theme-name--light"
                >Default</span
              >
            </div>
            <div
              class="themes__theme themes__theme--catppuccin-latte"
              @click="setBodyTheme('cat-latte')"
            >
              <span
                class="themes__theme-name themes__theme-name--catppuccin-latte"
                >Catppuccin Latte</span
              >
            </div>
          </div>
        </div>
        <div class="themes">
          <span class="themes__title">Dark</span>
          <div class="themes__theme-wrapper">
            <div
              class="themes__theme themes__theme--dark"
              @click="setBodyTheme('dark-theme')"
            >
              <span class="themes__theme-name themes__theme-name--dark"
                >Default</span
              >
            </div>
            <div
              class="themes__theme themes__theme--catppuccin-mocha"
              @click="setBodyTheme('cat-mocha')"
            >
              <span
                class="themes__theme-name themes__theme-name--catppuccin-mocha"
                >Catppuccin Mocha</span
              >
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </Teleport>
</template>

<script setup>
import Modal from "components/Modal.vue";
import { provide, ref, computed, watch, onMounted } from "vue";
import useModal from "hooks/useModal";
import { useStore } from "vuex";
import SearchSvg from "components/icons/Search.vue";
import SettingsSvg from "components/icons/Settings.vue";
import LinksContainer from "components/LinksContainer.vue";
import DChevronRightSvg from "components/icons/DChevronRight.vue";
import DChevronLeftSvg from "components/icons/DChevronLeft.vue";
import SandwichSvg from "components/icons/Sandwich.vue";
import { computedVariables, sharedVariables } from "util/variable";

const store = useStore();
const modal = ref(null);
const { showModal, modalStyles, provideName } = useModal(modal);
const { mainContainerDefault, mainContentDefault } = sharedVariables;
const theme = localStorage.getItem("pageTheme");
const navDefault = ref(true);
const navHover = ref(false);
const navClick = ref(false);
const asideDefault = ref(true);
const navBtnIcon = ref(SandwichSvg);
const body = document.body;

provide(provideName, modal);

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

const showNavList = () => {
  if (navClick.value === false) {
    navDefault.value = false;
    navHover.value = true;
  }
};

const hideNavList = () => {
  if (navClick.value === false) {
    navDefault.value = true;
    navHover.value = false;
  }
};

watch(navClasses, (currentClass) => {
  if (currentClass["nav-default"]) {
    navBtnIcon.value = SandwichSvg;
  } else if (currentClass["nav-hover"]) {
    navBtnIcon.value = DChevronRightSvg;
  } else if (currentClass["nav-click"]) {
    navBtnIcon.value = DChevronLeftSvg;
  }
});

const navBtnClicked = () => {
  if (navHover.value) {
    navDefault.value = false;
    navHover.value = false;
    navClick.value = true;
    asideDefault.value = false;
    mainContainerDefault.value = false;
    mainContentDefault.value = false;
  } else {
    navDefault.value = false;
    navHover.value = true;
    navClick.value = false;
    asideDefault.value = true;
    mainContainerDefault.value = true;
    mainContentDefault.value = true;
  }
};

const navBtnTouched = () => {
  navHover.value = false;

  if (navDefault.value) {
    navDefault.value = false;
    navClick.value = true;
    asideDefault.value = false;
    mainContainerDefault.value = false;
    mainContentDefault.value = false;
  }

  if (navClick.value) {
    navDefault.value = true;
    asideDefault.value = true;
    mainContainerDefault.value = true;
    mainContentDefault.value = true;
  }
};

const lightClicked = () => {
  body.className = "default-theme";
  if (theme) {
    localStorage.removeItem("pageTheme");
  }
};

const setBodyTheme = (theme) => {
  body.className = "";
  body.classList.add(theme);
  localStorage.setItem("pageTheme", theme);
};

onMounted(() => {
  body.className = "";
  body.classList.add(theme);
  localStorage.setItem("pageTheme", theme);
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
    @extend .navbar-btn;
  }

  .nav-default .nav-list {
    display: none;
  }

  .nav-hover {
    @include flex-layout($row-gap: 2rem);

    .nav-list {
      box-shadow: $box-shadow-1;
      @include spacing($mt: 0.1rem, $pb: 0.6rem);
      transform: translateX(-100%);
      animation: slideIn 0.4s ease-in-out;
      animation-fill-mode: forwards;
      padding-right: 1rem;
      background-color: $white;

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
      box-sizing: border-box;
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
        font-size: $fs-x-small;
        @include spacing($ml: 0.8rem, $pt: 0.9rem);

        span {
          color: $black;
          font-size: $fs-medium;
        }
      }

      &__nav-item:nth-child(2) {
        @include flex-layout($row-gap: 0.2rem);
        @include spacing-2($my: 10px, $mx: 0.6rem);

        & > div {
          @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
          align-items: center;
          cursor: pointer;
          border-radius: 3%;
          padding: 0.28rem;
          transition: background-color 0.1s;

          &:hover {
            background-color: $gray-4;
          }

          &:active {
            background-color: $gray;
          }
        }
      }

      &__nav-item:nth-child(3) {
        @include flex-layout($row-gap: 1.7rem);
        @include spacing-2($my: 10px, $mx: 0.7rem);
      }
    }
  }
}

.modal-content {
  .modal-title {
    font-size: $fs-small;
  }

  .themes-wrapper {
    @include grid-layout(
      $grid-template-columns: repeat(2, 1fr),
      $column-gap: 4rem
    );
  }

  .themes {
    @include flex-layout($row-gap: 2rem);

    &__title {
      padding-bottom: 3px;
      border-bottom: 1px solid $black;
      width: 2rem;
      font-size: $fs-x-small;
    }

    &__theme-wrapper {
      @include grid-layout(
        $grid-template-columns: repeat(2, 1fr),
        $column-gap: 10px
      );
    }

    &__theme {
      @include flex-layout($row-gap: 8px);
      border-radius: 10px;
      @include sizing(6rem, 5rem);
      cursor: pointer;
      transition: opacity 0.5s;
      border: none;
      outline: none;
      justify-content: center;
      color: $white;

      &--dark {
        background-color: $dark;
      }

      &--catppuccin-mocha {
        background-color: $mocha-base;
      }

      &--light {
        background-color: $white;
      }

      &--catppuccin-latte {
        background-color: $latte-mantle;
      }

      &--light,
      &--catppuccin-latte {
        border: 1px solid $dark;
        color: $black;
      }

      &:hover {
        opacity: 0.81;
      }
    }

    &__theme-name {
      text-align: center;
      font-size: $fs-x-small;
    }
  }
}
</style>
