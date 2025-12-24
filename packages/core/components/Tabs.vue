<script setup lang="ts">
import Icon from "@core/@client/components/Icon.vue";
import { onBeforeUnmount, onMounted } from "vue";
import { useStore } from "@core/store";
import { Icons } from "@core/enum";
import { setActiveTab, setTabs } from "@core/util/local-storage";

const store = useStore;

const emit = defineEmits<{
  navigate: [path: string];
}>();

function updateActiveTab(index: number) {
  store.storeActiveTab(index);
  if (store.tabs[index]) emit("navigate", store.tabs[index].pagePath);
}

function addTab() {
  const tabs = store.getTabs;
  const activePage = store.getActivePage;
  tabs.push({
    pageId: activePage.id,
    pageName: activePage.title,
    pagePath: activePage.path,
  });
  store.storeTabs(tabs);
  const index = tabs.length - 1;
  store.storeActiveTab(index);
  store.storeActivePage(activePage);
  emit("navigate", activePage.path);
}

function removeTab(index: number) {
  const tabs = store.getTabs;
  if (tabs.length > 0) {
    tabs.splice(index, 1);
    store.storeTabs(tabs);
    store.storeActiveTab(0);
    if (tabs[0]) emit("navigate", tabs[0].pagePath);
  }
}

function loadFirstTab() {
  const tabs = store.getTabs;
  const activePage = store.activePage;

  if (tabs.length === 0 && activePage)
    store.storeTabs([
      {
        pageId: activePage.id,
        pageName: activePage.title,
        pagePath: activePage.path,
      },
    ]);
}

function saveTabs() {
  setTabs(store.tabs);
  setActiveTab(store.activeTab);
}

onMounted(() => {
  window.addEventListener("load", loadFirstTab);
  window.addEventListener("beforeunload", saveTabs);
});

onBeforeUnmount(() => {
  window.removeEventListener("load", loadFirstTab);
  window.addEventListener("beforeunload", saveTabs);
});
</script>

<template>
  <div class="tabs">
    <div
      v-for="[index, page] in store.tabs.entries()"
      class="tabs__tab"
      :key="index"
      :class="store.activeTab == index ? 'tabs__tab--active' : ''"
      @click.stop="updateActiveTab(index)"
      @touchstart="updateActiveTab(index)"
    >
      <span>{{ page.pageName }}</span>
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
      v-if="store.tabs.length < 10"
    >
      <Icon :icon="Icons.add" />
    </button>
  </div>
</template>

<style lang="scss">
.app .tabs {
  display: flex;
  background-color: $gray-4;
  top: 0;
  height: $TABS_HEIGHT;
  z-index: 888;

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
    font-size: calc($fs-small - 1px);
    border-right: 1px solid $black-1;
    color: $black-6;

    span {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

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
