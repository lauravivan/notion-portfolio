<script setup lang="ts">
import { Icon } from "../@client/components";
import { computed, onBeforeUnmount, onMounted } from "vue";
// import { getGlobalProperties, setGlobalProperty } from "../global";
import {
  setActiveTab as setActiveTabLS,
  setTabs as setTabsLS,
} from "../util/local-storage";
import { Icons } from "../util";

// const activePage = computed(() => store.getters.getActivePage);

const props = defineProps(["route"])

function updateActiveTab(index: number) {
  // const tabs = [...getGlobalProperties.value.tabs];
  // setGlobalProperty("activeTab", index);
  // props.route.push(tabs[index].path);
}

function addTab() {
  // const tabs = [...getGlobalProperties.value.tabs];
  // // tabs.push(activePage.value);
  // setGlobalProperty("tabs", tabs);
  // setTabsLS(tabs);
  // const index = tabs.length - 1;
  // setGlobalProperty("activeTab", index);
  // setActiveTabLS(index);
  // store.commit("storeActivePage", activePage.value);
  // props.route.push(activePage.value.path);
}

function removeTab(index: number) {
  // const tabs = [...getGlobalProperties.value.tabs];
  // if (tabs.length > 1) {
  //   tabs.splice(index, 1);
  //   // setGlobalProperty("tabs", tabs);
  //   // setGlobalProperty("activeTab", 0);
  //   setActiveTabLS(0);
  //   setTabsLS(tabs);
  //   // store.commit("storeActivePage", tabs[0]);
  //   // router.push(tabs[0].path);
  // }
}

function loadFirstTab() {
  // const tabs = [...getGlobalProperties.value.tabs];
  // if (tabs.length === 0 && activePage.value) {
  //   setGlobalProperty("tabs", [activePage.value]);
  //   setTabsLS([activePage.value]);
  // }
}

onMounted(() => {
  window.addEventListener("load", loadFirstTab);
});

onBeforeUnmount(() => {
  window.removeEventListener("load", loadFirstTab);
});
</script>

<template>
  <div class="tabs">
    <!-- <div
      v-for="[index, page] in getGlobalProperties.tabs.entries()"
      class="tabs__tab"
      :key="index"
      :class="getGlobalProperties.activeTab == index ? 'tabs__tab--active' : ''"
      @click.stop="updateActiveTab(index)"
      @touchstart="updateActiveTab(index)"
    >
      {{ page.name }}
      <button
        class="tabs__tab--close"
        @click.stop="removeTab(index)"
        @touchstart="removeTab(index)"
      >
        <Icon :icon="Icons.close" />
      </button>
    </div>
    <button
      class="tabs__add"
      @click.stop="addTab()"
      @touchstart="addTab()"
      v-if="getGlobalProperties.tabs.length < 10"
    >
      <Icon :icon="Icons.add" />
    </button> -->
  </div>
</template>
<!-- 
<style lang="scss">
@use "@core/assets/scss/main";
@use "@core/assets/scss/_var" as var;
@use "@core/assets/scss/_mixin.scss" as mixin;

.app .tabs {
  display: flex;
  background-color: var.$gray-4;
  top: 0;
  height: var.$TABS_HEIGHT;
  z-index: 10000;

  @media (max-width: var.$screen-small) {
    top: auto;
    bottom: 0;
    background-color: var.$gray;
    overflow-x: auto;

    &::-webkit-scrollbar,
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      visibility: hidden;
    }
  }

  &__tab {
    all: unset;
  }

  &__tab,
  &__add,
  &__tab--close {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  &__tab {
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    font-size: calc(var.$fs-small - 1px);
    border-right: 1px solid var.$black-1;
    color: var.$black-6;

    @media (max-width: var.$screen-small) {
      min-width: 150px;
    }

    &:hover {
      background-color: var.$gray-6;
    }

    &--active {
      background-color: var.$white;

      &:hover {
        background-color: var.$white;
      }
    }

    &--close {
      visibility: hidden;
    }
  }

  &__tab:hover {
    .tabs__tab--close {
      visibility: visible;
    }
  }

  &__add {
    @include mixin.spacing($mt: auto, $mb: auto, $ml: 7px);
  }

  &__add,
  &__tab--close {
    @extend .button;
  }
}
</style> -->
