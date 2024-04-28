<template>
  <div v-if="routeName === 'NotFound'">
    <router-view></router-view>
  </div>
  <div v-else>
    <div :class="mainContainerClasses">
      <Aside />

      <div :class="mainContentClasses">
        <div class="tabs">
          <div
            v-for="(page, index) in globalTabs"
            class="tabs__tab"
            @click.stop="setPage(index)"
            :key="index"
            :class="globalActiveTab == index ? 'tabs__tab--active' : ''"
          >
            {{ page.pageName }}
            <button class="tabs__tab--close" @click.stop="removeTab(index)">
              <Icon :icon="icons.close" />
            </button>
          </div>
          <button
            class="tabs__add"
            @click.stop="addTab()"
            v-if="globalTabs.length < 10"
          >
            <Icon :icon="icons.add" />
          </button>
        </div>

        <Header />

        <router-view></router-view>

        <footer class="footer">Developed by Laura (^.^)</footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import Aside from "components/Aside.vue";
import Header from "components/Header.vue";
import router from "@/router/router";
import Icon from "UIElements/Icon.vue";
import { computed, onMounted } from "vue";
import {
  icons,
  globalTabs,
  setGlobalProperty,
  globalActiveTab,
  activePage,
  mainContainerClasses,
  mainContentClasses,
} from "global";
import { setTabs, setActiveTab, tabs, activeTab } from "util/util";
import { useStore } from "vuex";

const store = useStore();

const routeName = computed(() => {
  return router.currentRoute.value.name;
});

function updateIndex(tabsUpdated, indexUpdated, activePageUpdated) {
  setTabs(tabsUpdated);
  setActiveTab(indexUpdated);
  setGlobalProperty("tabs", tabsUpdated);
  setGlobalProperty("activeTab", indexUpdated);
  store.commit("storeActivePage", activePageUpdated);
  router.push(tabsUpdated[indexUpdated].pagePath);
}

function setPage(index) {
  updateIndex(tabs, index, tabs[index]);
}

function addTab() {
  //redirects to active page
  tabs.push(activePage.value);
  const index = tabs.length - 1;

  setTimeout(() => {
    updateIndex(tabs, index, activePage.value);
  }, 1000);
}

function removeTab(index) {
  // redirects to page in tab before
  if (index != 0) {
    const indexBefore = index - 1;
    tabs.splice(index, 1);
    updateIndex(tabs, indexBefore, tabs[indexBefore]);
  }
}

onMounted(() => {
  setTimeout(() => {
    if (tabs.length === 0 && activePage.value) {
      tabs[0] = activePage.value;
    }

    setTabs(tabs);
    setActiveTab(activeTab);
    setGlobalProperty("tabs", tabs);
    setGlobalProperty("activeTab", activeTab);
  }, 500);
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.aside-click,
.aside-default {
  @extend .webkit;
}

.main-content-default,
.main-content-click,
.aside-default,
.aside-click {
  height: 100%;
}

.header,
.tabs {
  position: fixed;
  left: 0;
}

.tabs {
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

.header {
  top: $TABS_HEIGHT;

  @media (max-width: $screen-small) {
    top: 0;
  }
}

.main-container-default {
  .aside-default {
    display: flex;
    position: fixed;
    top: calc($TABS_HEIGHT + 13px);
    z-index: 3;

    @media (max-width: $screen-small) {
      top: 13px;
    }
  }

  .header,
  .tabs {
    width: 100%;
  }

  .header {
    &__content {
      @include spacing($pt: 11px, $pl: 40px, $pr: 10px, $pb: 8px);
    }
  }
}

.main-container-click {
  position: relative;
  margin-left: $ASIDE_CLICK_SIZE;

  .aside-click {
    position: fixed;
    width: $ASIDE_CLICK_SIZE;
    inset: 0;
    box-shadow: $box-shadow-2;
    background-color: $gray-2;
    z-index: 3;
  }

  .header,
  .tabs {
    margin-left: $ASIDE_CLICK_SIZE;
    width: calc(100% - $ASIDE_CLICK_SIZE);
  }

  .header {
    &__content {
      @include spacing($pt: 11px, $pl: 10px, $pr: 10px, $pb: 8px);
    }
  }
}

.footer {
  font-size: $fs-xs;
  position: absolute;
  right: 20px;
  bottom: 15px;
  z-index: 1;
  background-color: $white;
  border: 1px solid $gray-5;
  box-shadow: $box-shadow-1;
  border-radius: 40px;
  padding: 15px 14px;

  @media (max-width: $screen-small) {
    bottom: calc($TABS_HEIGHT + 0.9rem);
  }
}
</style>
