<template>
  <div v-if="route.name === 'NotFound'">
    <router-view></router-view>
  </div>
  <div v-else class="app">
    <div :class="mainContainerClasses">
      <Aside />

      <div :class="mainContentClasses">
        <Tabs />

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
import Tabs from "components/Tabs.vue";
import router from "router";
import { computed } from "vue";
import { mainContainerClasses, mainContentClasses } from "global";

const route = computed(() => {
  return router.currentRoute.value;
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.app {
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
}
</style>
