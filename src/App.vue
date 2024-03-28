<template>
  <div :class="mainContainerClasses">
    <Aside />

    <div :class="mainContentClasses">
      <Header />

      <router-view></router-view>

      <footer class="footer">
        <span>Developed by Laura (^.^)</span>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Aside from "components/Aside.vue";
import Header from "components/Header.vue";
import { mainContainerClasses, mainContentClasses } from "global";
</script>

<style lang="scss">
@import "@/assets/scss/main";

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
    width: 100%;
    height: $HEADER_HEIGHT !important;
  }
}

.main-container-default {
  .aside-default {
    display: flex;
    position: fixed;
    top: 11px;
    left: 13px;
    z-index: 3;
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

  .header {
    &__content {
      @include spacing(
        $pt: 11px,
        $pl: 10px,
        $pr: 10px,
        $pb: 8px,
        $ml: $ASIDE_CLICK_SIZE
      );
    }
  }
}

.footer {
  font-size: $fs-xs;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: $white;
  height: $HEADER_HEIGHT;
  margin-right: 10px;

  > span {
    border: 1px solid $gray-5;
    box-shadow: $box-shadow-1;
    border-radius: 40px;
    padding: 11px 14px;
    background-color: $white;
  }
}
</style>
