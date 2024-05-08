<template>
  <main
    class="page-wrapper"
    :class="[
      getGlobalProperties.fontSize,
      getGlobalProperties.fontStyle,
      getGlobalProperties.pageWidth,
    ]"
  >
    <div v-if="activePage.pageBanner" class="page-banner">
      <img :src="activePage.pageBanner" />
    </div>
    <div
      class="page-content"
      :class="activePage.pageBanner ? 'page-content--banner' : ''"
    >
      <div class="page-title">
        <img :src="activePage.pageIcon" />
        <span>{{ activePage.pageName }}</span>
      </div>
      <router-view />
      <div style="width: auto; height: 200px"></div>
    </div>
  </main>
</template>

<script setup>
import { activePage, getGlobalProperties } from "global";
</script>

<style lang="scss">
@import "@/assets/scss/main";

.page-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  margin-top: calc($HEADER_HEIGHT + $TABS_HEIGHT) !important;
  height: calc(100vh - ($HEADER_HEIGHT + $TABS_HEIGHT)) !important;

  @media (max-width: $screen-small) {
    margin-top: $HEADER_HEIGHT !important;
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
    @include grid-layout($row-gap: 20px);
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 1;
    width: 50%;

    .page-title {
      @include flex-layout($row-gap: 80px);

      img {
        max-width: 5.8rem;
      }

      span {
        font-size: 2.5rem;
        font-weight: $fw-900;
      }
    }

    &--banner {
      top: 160px;
    }
  }
}

.font-roboto-mono {
  font-family: $mono;
}

.font-roboto-serif {
  font-family: $serif;
}

/*configs*/
@media (min-width: $screen-small) {
  .font-size-small {
    p,
    span,
    div {
      font-size: $fs-small;
    }

    .page-content .page-title {
      span {
        font-size: $fs-large + 0.7rem;
      }
    }

    .h1 {
      font-size: $fs-large + 0.6rem;
    }

    .h2 {
      font-size: $fs-large + 0.4rem;
    }

    .h3 {
      font-size: $fs-large + 0.2rem;
    }

    .h4 {
      font-size: $fs-large;
    }

    .h5 {
      font-size: $fs-large - 0.2rem;
    }

    .h6 {
      font-size: $fs-large - 0.4rem;
    }
  }

  .page-full-width {
    .page-content {
      padding: 0 100px;
      width: 100%;
    }
  }
}

@media (max-width: $screen-xs) {
  .page-wrapper {
    .page-content {
      width: 100%;
      padding: 0 20px !important;

      .page-title {
        span {
          font-size: $fs-xl;
        }
      }
    }
  }
}
</style>
