<template>
  <div class="tabs">
    <div
      v-for="(page, index) in getGlobalProperties.tabs"
      class="tabs__tab"
      :key="index"
      :class="getGlobalProperties.activeTab == index ? 'tabs__tab--active' : ''"
      @click.stop="updateActiveTab(index)"
    >
      {{ page.pageName }}
      <button class="tabs__tab--close" @click.stop="removeTab(index)">
        <Icon :icon="icons.close" />
      </button>
    </div>
    <button
      class="tabs__add"
      @click.stop="addTab()"
      v-if="getGlobalProperties.tabs.length < 10"
    >
      <Icon :icon="icons.add" />
    </button>
  </div>
</template>

<script setup>
import router from "@/router/router";
import Icon from "UIElements/Icon.vue";
import { computed, onMounted, watch } from "vue";
import {
  icons,
  setGlobalProperty,
  getGlobalProperties,
  activePage,
  mainContainerClasses,
  mainContentClasses,
} from "global";
import { useStore } from "vuex";

const store = useStore();

const route = computed(() => {
  return router.currentRoute.value;
});

function getActiveTab() {
  return localStorage.getItem("activeTab") || 0;
}

function getTabs() {
  return JSON.parse(localStorage.getItem("tabs")) || [];
}

function storeActiveTab(index) {
  localStorage.setItem("activeTab", index);
}

function storeTabs(tabs) {
  localStorage.setItem("tabs", JSON.stringify(tabs));
}

function updateTabs(tabsUpdated, activeTabUpdated) {
  storeActiveTab(activeTabUpdated);
  storeTabs(tabsUpdated);
  setGlobalProperty("tabs", tabsUpdated);
  setGlobalProperty("activeTab", activeTabUpdated);
}

function updateActiveTab(index) {
  storeActiveTab(index);
  setGlobalProperty("activeTab", index);
  router.push(getTabs()[index].pagePath);
}

function addTab() {
  const tabs = getTabs();

  tabs.push(activePage.value);
  const index = tabs.length - 1;
  updateTabs(tabs, index);
  store.commit("storeActivePage", tabs[index]);
  router.push(activePage.value.pagePath);
}

function removeTab(index) {
  const tabs = getTabs();

  if (tabs.length > 1) {
    tabs.splice(index, 1);
    updateTabs(tabs, 0);
    store.commit("storeActivePage", tabs[0]);
    router.push(tabs[0].pagePath);
  }
}

onMounted(() => {
  const tabs = getTabs();
  const activeTab = getActiveTab();

  if (tabs.length === 0 && activePage.value) {
    tabs[0] = activePage.value;
  }

  updateTabs(tabs, activeTab);
});

watch(route, () => {
  const tabs = getTabs();
  const activeTab = getActiveTab();

  tabs[activeTab] = activePage.value;
  storeTabs(tabs);
  setGlobalProperty("tabs", tabs);
  document.body.style.pointerEvents = "auto";
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.app .tabs {
  display: flex;
  background-color: $gray-4;
  top: 0;
  height: $TABS_HEIGHT;

  @media (max-width: $screen-small) {
    top: auto;
    bottom: 0;
    background-color: $gray;
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
    font-size: calc($fs-small - 1px);
    border-right: 1px solid $black-1;
    color: $black-6;

    @media (max-width: $screen-small) {
      min-width: 150px;
    }

    &:hover {
      background-color: $gray-6;
    }

    &--active {
      background-color: $white;

      &:hover {
        background-color: $white;
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
    @include spacing($mt: auto, $mb: auto, $ml: 7px);
  }

  &__add,
  &__tab--close {
    @extend .button;
  }
}
</style>
