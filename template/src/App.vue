<script setup lang="ts">
import { Aside, Header } from "notion-portfolio";
import Tabs from "./Tabs.vue";
// import router from "./router";
import { onMounted } from "vue";
// import {useStore} from "vuex";
// import { useAside } from "../hooks";
// import { Theme } from "../util";

// const { mainContainerClasses, mainContentClasses } = useAside();
// const store = useStore();

// const route = computed(() => {
//   return router.currentRoute.value;
// });

// const theme = computed<Theme>(() => store.getters.getTheme);

// watch(theme, () => {
//   document.body.className = "";
//   document.body.classList.add(theme.value);
// });

onMounted(() => {
  document.body.className = "";
  // document.body.classList.add(theme.value);
});
</script>

<template>
  <!-- <div v-if="route.name === 'NotFound'">
    <router-view></router-view>
  </div> -->
  <div class="app">
    <div>
      <Aside author="Your name" socialMedia="@yourname" />

      <div>
        <Tabs />

        <!-- <Header /> -->

        <router-view></router-view>

        <footer class="footer">Developed by Laura (^.^)</footer>
      </div>
    </div>
  </div>
</template>

<!-- <style lang="scss">
@use "@core/assets/scss/main";
@use "@core/assets/scss/_var" as var;
@use "@core/assets/scss/_mixin.scss" as mixin;

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
    top: var.$TABS_HEIGHT;

    @media (max-width: var.$screen-small) {
      top: 0;
    }
  }

  .main-container-default {
    .aside-default {
      display: flex;
      position: fixed;
      top: calc(var.$TABS_HEIGHT + 13px);
      z-index: 3;

      @media (max-width: var.$screen-small) {
        top: 13px;
      }
    }

    .header,
    .tabs {
      width: 100%;
    }

    .header {
      &__content {
        @include mixin.spacing($pt: 11px, $pl: 40px, $pr: 10px, $pb: 8px);
      }
    }
  }

  .main-container-click {
    position: relative;
    margin-left: var.$ASIDE_CLICK_SIZE;

    .aside-click {
      position: fixed;
      width: var.$ASIDE_CLICK_SIZE;
      inset: 0;
      box-shadow: var.$box-shadow-2;
      background-color: var.$gray-2;
      z-index: 3;
    }

    .header,
    .tabs {
      margin-left: var.$ASIDE_CLICK_SIZE;
      width: calc(100% - var.$ASIDE_CLICK_SIZE);
    }

    .header {
      &__content {
        @include mixin.spacing($pt: 11px, $pl: 10px, $pr: 10px, $pb: 8px);
      }
    }
  }

  .footer {
    font-size: var.$fs-xs;
    position: absolute;
    right: 20px;
    bottom: 15px;
    z-index: 1;
    background-color: var.$white;
    border: 1px solid var.$gray-5;
    box-shadow: var.$box-shadow-1;
    border-radius: 40px;
    padding: 15px 14px;

    @media (max-width: var.$screen-small) {
      bottom: calc(var.$TABS_HEIGHT + 0.9rem);
    }
  }
}
</style> -->
