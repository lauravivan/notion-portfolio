<script setup lang="ts">
import type { PageInfo } from "@core/@types";
import useStore from "@core/store";
import { setTheme } from "@core/util/local-storage";
import { onBeforeUnmount, onMounted } from "vue";

const { activePage } = defineProps<{ activePage: PageInfo }>();

const store = useStore;

function saveTheme() {
  setTheme(store.getTheme);
}

onMounted(() => {
  window.addEventListener("beforeunload", saveTheme);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", saveTheme);
});
</script>

<template>
  <main
    class="page-wrapper"
    :class="[
      store.getDynamicCurrentPageInfo?.settings.fontSize,
      store.getDynamicCurrentPageInfo?.settings.fontFamily,
      store.getDynamicCurrentPageInfo?.settings.pageSize,
    ]"
  >
    <div v-if="activePage.banner.path" class="page-banner">
      <img :src="activePage.banner.path" />
      <a :href="activePage.banner.link">{{ activePage.banner.author }}</a>
    </div>
    <div
      class="page-content"
      :class="activePage.banner.path ? 'page-content--banner' : ''"
    >
      <div class="page-title">
        <img :src="activePage.icon.path" />
        <span>{{ activePage.title }}</span>
      </div>
      <router-view></router-view>
      <div style="width: auto; height: 200px"></div>
    </div>
  </main>
</template>

<style lang="scss">
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
    position: relative;

    a {
      position: absolute;
      background-color: #fff;
      bottom: 0;
      right: 0;
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 10%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .page-content {
    @include grid-layout();
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 1;
    width: 50%;

    .page-title {
      @include flex-layout($row-gap: 40px);
      margin-bottom: 20px;

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
