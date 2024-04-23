<template>
  <div v-if="routeName === 'NotFound'">
    <router-view></router-view>
  </div>
  <div v-else>
    <div :class="mainContainerClasses">
      <Aside />

      <div :class="mainContentClasses">
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
import { computed } from "vue";

import { mainContainerClasses, mainContentClasses } from "global";

const routeName = computed(() => {
  return router.currentRoute.value.name;
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.aside-click,
.aside-default {
  ::-webkit-scrollbar {
    width: 3px;
  }
}

.main-content-default,
.main-content-click,
.aside-default,
.aside-click {
  height: 100%;
}

.main-container-default,
.main-container-click {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    height: $HEADER_HEIGHT !important;

    @media (max-width: $screen-small) {
      height: $HEADER_HEIGHT_SM_SCREEN !important;
    }
  }
}

.main-container-default {
  .aside-default {
    display: flex;
    position: fixed;
    top: 49px;
    left: 13px;
    z-index: 3;

    @media (max-width: $screen-small) {
      top: 13px;
    }
  }

  .header {
    width: 100%;

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

  .header {
    margin-left: $ASIDE_CLICK_SIZE;
    width: calc(100% - $ASIDE_CLICK_SIZE);

    &__content {
      @include spacing($pt: 11px, $pl: 10px, $pr: 10px, $pb: 8px);
    }
  }
}

.footer {
  font-size: $fs-xs;
  position: absolute;
  right: 30px;
  bottom: 20px;
  z-index: 999;
  background-color: $white;
  border: 1px solid $gray-5;
  box-shadow: $box-shadow-1;
  border-radius: 40px;
  padding: 15px 14px;
}
</style>
