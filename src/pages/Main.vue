<template>
  <main
    class="page-wrapper"
    :class="[
      getGlobalProperties.smallText ? 'font-size-small' : '',
      getGlobalProperties.fontStyle,
      getGlobalProperties.fullWidth ? 'page-full-width' : '',
    ]"
  >
    <div v-if="activePage.bannerPath" class="page-banner">
      <img :src="activePage.bannerPath" />
    </div>
    <div
      class="page-content"
      :class="activePage.bannerPath ? 'page-content--banner' : ''"
    >
      <div class="page-title">
        <img :src="activePage.iconPath" />
        <span>{{ activePage.name }}</span>
      </div>
      <router-view />
      <div style="width: auto; height: 200px"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { getGlobalProperties } from "@/global";

const store = useStore();
const activePage = computed<Page>(() => store.getters.getActivePage);
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;
@use "@/assets/scss/_var" as var;

.page-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  margin-top: calc(var.$HEADER_HEIGHT + var.$TABS_HEIGHT) !important;
  height: calc(100vh - (var.$HEADER_HEIGHT + var.$TABS_HEIGHT)) !important;

  @media (max-width: var.$screen-small) {
    margin-top: var.$HEADER_HEIGHT !important;
  }

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
    @include mixin.grid-layout($row-gap: 20px);
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 1;
    width: 50%;

    .page-title {
      @include mixin.flex-layout($row-gap: 80px);

      img {
        max-width: 5.8rem;
      }

      span {
        font-size: 2.5rem;
        font-weight: var.$fw-900;
      }
    }

    &--banner {
      top: 160px;
    }
  }
}

.font-roboto-mono {
  font-family: var.$mono;
}

.font-roboto-serif {
  font-family: var.$serif;
}

/*configs*/
@media (min-width: var.$screen-small) {
  .font-size-small {
    p,
    span,
    div {
      font-size: var.$fs-small;
    }

    .page-content .page-title {
      span {
        font-size: var.$fs-large + 0.7rem;
      }
    }

    .h1 {
      font-size: var.$fs-large + 0.6rem;
    }

    .h2 {
      font-size: var.$fs-large + 0.4rem;
    }

    .h3 {
      font-size: var.$fs-large + 0.2rem;
    }

    .h4 {
      font-size: var.$fs-large;
    }

    .h5 {
      font-size: var.$fs-large - 0.2rem;
    }

    .h6 {
      font-size: var.$fs-large - 0.4rem;
    }
  }

  .page-full-width {
    .page-content {
      padding: 0 100px;
      width: 100%;
    }
  }
}

@media (max-width: var.$screen-xs) {
  .page-wrapper {
    .page-content {
      width: 100%;
      padding: 0 20px !important;

      .page-title {
        span {
          font-size: var.$fs-xl;
        }
      }
    }
  }
}
</style>
