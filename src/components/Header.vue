<template>
  <header class="header">
    <div class="header__content">
      <Breadcrumb />
      <div></div>
      <div
        class="header__btn"
        role="button"
        id="header-btn"
        @click="showMenuModal"
      >
        <Icon :icon="icons.dotsHoriz" />
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
          v-for="font in fontsOptions"
          class="header-menu__font-wrapper"
          @click="storeActiveSettings(FONT_STYLE_PROVIDE_NAME, font.id)"
          :class="{
            'header-menu__font-wrapper--active':
              getGlobalProperties.fontStyle === font.id,
          }"
        >
          <span class="header-menu__ag">Ag</span>
          <span class="header-menu__font-name">{{ font.name }}</span>
        </div>
      </div>
    </div>

    <div class="header-menu__size-and-width">
      <Toggle
        :provideName="FONT_SIZE_PROVIDE_NAME"
        :active="activeFS"
        :toToggle="toToggleFS"
        :toggleRef="toggleRefFS"
        @click="storeActiveSettings(FONT_SIZE_PROVIDE_NAME, activeFS)"
        >Small Text</Toggle
      >
      <Toggle
        :provideName="FULL_WIDTH_PROVIDE_NAME"
        :active="activeFW"
        :toToggle="toToggleFW"
        :toggleRef="toggleRefFW"
        @click="storeActiveSettings(FULL_WIDTH_PROVIDE_NAME, activeFW)"
        >Full width</Toggle
      >
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { computed, onBeforeUnmount, onMounted, watch } from "vue";
import { useStore } from "vuex";
import useModal from "@/hooks/useModal";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Toggle from "./Toggle.vue";
import useToggle from "@/hooks/useToggle";
import Modal from "./Modal.vue";
import { getGlobalProperties, setGlobalProperty } from "@/global";

const store = useStore();

const FONT_STYLE_PROVIDE_NAME = "fontStyle";
const FULL_WIDTH_PROVIDE_NAME = "fullWidth";
const FONT_SIZE_PROVIDE_NAME = "smallText";
const HEADER_MENU_PROVIDE_NAME = "headerMenu";

const activePage = computed<Page>(() => store.getters.getActivePage);
const fontsOptions = computed(() => store.getters.getFontsOptions);
const settings = computed<PagesSettings>(() => store.getters.getSettings);
const icons = computed(() => store.getters.getIcons);

const {
  active: activeFS,
  toToggle: toToggleFS,
  toggleRef: toggleRefFS,
  handleActive: handleActiveFS,
} = useToggle({
  provideName: FONT_SIZE_PROVIDE_NAME,
});

const {
  active: activeFW,
  toToggle: toToggleFW,
  toggleRef: toggleRefFW,
  handleActive: handleActiveFW,
} = useToggle({
  provideName: FULL_WIDTH_PROVIDE_NAME,
});

const {
  showModal: showMenuModal,
  hideModal: hideMenuModal,
  addModalListener: addMenuModalListener,
} = useModal({
  provideName: HEADER_MENU_PROVIDE_NAME,
});

function storeActiveSettings<K extends keyof Settings>(
  provideName: K,
  value: Settings[K]
) {
  setGlobalProperty(provideName, value);

  store.commit("storeSettings", {
    key: activePage.value.id,
    settings: {
      ...getGlobalProperties.value,
      [provideName]: value,
    },
  });
}

function loadFirstSettings() {
  if (activePage && activePage.value && activePage.value.id) {
    const actSetts = settings.value[activePage.value.id];
    console.log(activePage.value.id);
    setGlobalProperty("fontStyle", actSetts.fontStyle);
    setGlobalProperty("fullWidth", actSetts.fullWidth);
    setGlobalProperty("smallText", actSetts.smallText);
    handleActiveFS(actSetts[FONT_SIZE_PROVIDE_NAME]);
    handleActiveFW(actSetts[FULL_WIDTH_PROVIDE_NAME]);
  }
}

onMounted(() => {
  window.addEventListener("load", loadFirstSettings);
});

onBeforeUnmount(() => {
  window.removeEventListener("load", loadFirstSettings);
});

watch(activePage, () => {
  loadFirstSettings();
});
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;
@use "@/assets/scss/_var" as var;

.app .header {
  background-color: var.$white;
  height: var.$HEADER_HEIGHT;

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
    border-bottom: 1px solid var.$black-1;
    @include mixin.flex-layout($row-gap: 1rem);

    > span {
      font-size: var.$fs-xs;
      color: var.$black-6;
      font-weight: var.$fw-600;
    }
  }

  &__ag {
    color: var.$black-6;
    font-stretch: condensed;
    font-size: var.$fs-large;
  }

  &__font-name {
    color: var.$black-4;
    font-weight: var.$fw-600;
    font-size: var.$fs-xs;
  }

  &__fonts {
    @include mixin.grid-layout(repeat(3, 1fr));
  }

  &__font-wrapper {
    @include mixin.flex-layout($row-gap: 0.5rem);
    align-items: center;
    border-radius: 5%;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 5px 3px;

    &:nth-child(1) {
      font-family: var.$default;
    }

    &:nth-child(2) {
      font-family: var.$serif;
    }

    &:nth-child(3) {
      font-family: var.$mono;
    }

    &:hover {
      background-color: var.$gray-4;
    }

    &--active {
      animation: blink 1s;

      .header-menu__ag {
        color: var.$active;
      }
    }
  }

  &__size-and-width {
    @include mixin.flex-layout($row-gap: 0.5rem);
    padding: 1rem 0.2rem 0.5rem;

    @media (max-width: var.$screen-xs) {
      display: none;
    }
  }
}
</style>
