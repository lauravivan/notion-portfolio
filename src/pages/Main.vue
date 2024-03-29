<template>
  <main
    class="page-wrapper"
    :class="[
      globalProperties.fontSize,
      globalProperties.fontStyle,
      globalProperties.pageWidth,
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
      <div style="width: auto; height: 100px"></div>
    </div>
  </main>
</template>

<script setup>
import { activePage } from "global";
</script>

<style lang="scss">
@import "@/assets/scss/main";

.page-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  @include sizing(100%, 100vh);

  .page-banner {
    width: 100%;
    height: 210px;
    margin: $HEADER_HEIGHT 0px !important;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .page-content {
    @include grid-layout($row-gap: 20px);
    position: absolute;
    top: 160px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 1;
    width: 50%;
    margin: $HEADER_HEIGHT 0px !important;

    .page-title {
      @include flex-layout($row-gap: 80px);

      img {
        max-width: 5.8rem;
      }

      span {
        font-size: 2.5rem;
        font-weight: $fw-700;
      }
    }
  }
}

/*configs*/
@media (min-width: $screen-small) {
  .font-roboto-mono {
    font-family: $mono;
  }

  .font-roboto-serif {
    font-family: $serif;
  }

  .font-size-small {
    p,
    span,
    div,
    h5 {
      font-size: $fs-small;
    }

    .page-content .page-title {
      span {
        font-size: $fs-large + 0.7rem;
      }
    }
  }

  .page-full-width {
    .page-content {
      padding: 0 100px;
      width: 100%;
      place-items: unset;
    }
  }
}

@media (max-width: $screen-xs) {
  .page-wrapper {
    .page-content {
      width: 100%;
      padding: 0 20px;

      .page-title {
        span {
          font-size: $fs-xl;
        }
      }
    }
  }
}
</style>
