<template>
  <main
    class="page-wrapper"
    :class="[
      globalState.fontStyle,
      globalState.fontSize,
      globalState.pageWidth,
    ]"
  >
    <div v-if="activePage.pageBanner" class="page-banner">
      <img :src="activePage.pageBanner" />
    </div>
    <div class="page-content">
      <div class="page-title">
        <img :src="activePage.pageIcon" />
        <span>{{ activePage.pageName }}</span>
      </div>
      <router-view></router-view>
      <div style="width: auto; height: 170px"></div>
    </div>
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, ref, computed } from "vue";
import { computedVariables } from "util/variable";
import {
  updateFontSize,
  updateFontStyle,
  updatePageWidth,
  globalState,
} from "@/globalState.js";

const { activePage } = computedVariables;

const setConfigs = () => {
  if (activePage) {
    updateFontStyle(activePage._value.fontStyle);
    updateFontSize(activePage._value.fontSize);
    updatePageWidth(activePage._value.pageWidth);
  }
};

onMounted(() => {
  setConfigs();
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.page-wrapper {
  @include sizing(100%, 100vh);
  overflow-y: auto;
  position: relative;

  .page-banner {
    width: 100%;
    height: 210px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .page-content {
    @include grid-layout($row-gap: 30px);
    position: absolute;
    top: 135px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 1;
    width: 50%;

    .page-title {
      @include flex-layout($row-gap: 25px);

      img {
        max-width: 5.8rem;
      }

      span {
        font-size: 3rem;
        font-weight: $fw-700;
      }
    }
  }
}
</style>
