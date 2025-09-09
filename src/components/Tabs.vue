<template>
  <div class="tabs">
    <div
      v-for="[index, page] in tabs.entries()"
      class="tabs__tab"
      :key="index"
      :class="activeTab == index ? 'tabs__tab--active' : ''"
      @click.stop="updateActiveTab(index)"
      @touchstart="updateActiveTab(index)"
    >
      {{ page.name }}
      <button
        class="tabs__tab--close"
        @click.stop="removeTab(index)"
        @touchstart="removeTab(index)"
      >
        <Icon :icon="icons.close" />
      </button>
    </div>
    <button
      class="tabs__add"
      @click.stop="addTab()"
      @touchstart="addTab()"
      v-if="tabs.length < 10"
    >
      <Icon :icon="icons.add" />
    </button>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import Icon from "@/components/Icon.vue";
import { computed, onBeforeUnmount, onMounted, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const icons = computed(() => store.getters.getIcons);
const activePage = computed(() => store.getters.getActivePage);
const activeTab = computed<number>(() => store.getters.getActiveTab);
const tabs = computed<Page[]>(() => store.getters.getTabs);
const route = computed(() => {
  return router.currentRoute.value;
});

function updateActiveTab(index: number) {
  store.commit("storeActiveTab", index);
  router.push(tabs.value[index].path);
}

function addTab() {
  store.commit("storeTab", activePage.value);
  const index = tabs.value.length - 1;
  store.commit("storeActiveTab", index);
  store.commit("storeActivePage", activePage.value);
  router.push(activePage.value.path);
}

function removeTab(index: number) {
  if (tabs.value.length > 1) {
    store.commit("removeTab", index);
    store.commit("storeActivePage", tabs.value[0]);
    router.push(tabs.value[0].path);
  }
}

function loadFirstTab() {
  if (tabs.value.length === 0 && activePage.value) {
    store.commit("storeTab", activePage.value);
  }
}

onMounted(() => {
  window.addEventListener("load", loadFirstTab);
});

onBeforeUnmount(() => {
  window.removeEventListener("load", loadFirstTab);
});

watch(route, () => {
  document.body.style.pointerEvents = "auto";
  store.commit("updateTabs", {
    tabIndex: activeTab.value,
    page: activePage.value,
  });
});
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_var" as var;
@use "@/assets/scss/_mixin.scss" as mixin;

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
</style>
