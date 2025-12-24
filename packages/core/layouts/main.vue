<script setup lang="ts">
import type { PageInfo } from "@core/@types";
import { useStore } from "@core/store";
import { setTheme } from "@core/util/local-storage";
import { onBeforeUnmount, onMounted } from "vue";
import { Icons } from "@core/enum";
import formatDate from "@core/util/formatDate";

const { activePage } = defineProps<{ activePage: PageInfo }>();

const store = useStore;

//purple, blue, yellow, brown, green, orange and gray
const colors = [
  "cdb4db",
  "bde0fe",
  "ffd275",
  "ba9378",
  "d0f0c0",
  "fec89a",
  "ccc5b9",
];

function getColor() {
  const randomNumber = Math.floor(Math.random() * 6);
  return "#" + colors[randomNumber];
}

function saveTheme() {
  setTheme(store.getTheme);
}

const pageDate = formatDate(store.getDynamicPageInfo[activePage.id]?.created);

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
      <a :href="activePage.banner.link" target="_blank">{{
        activePage.banner.author
      }}</a>
    </div>
    <div
      class="page-content"
      :class="activePage.banner.path ? 'page-content--banner' : ''"
    >
      <div class="page-title">
        <img :src="activePage.icon.path" />
        <span>{{ activePage.title }}</span>
      </div>
      <table class="database" v-if="activePage.parentPage">
        <thead>
          <tr>
            <th></th>
            <th width="100%"></th>
          </tr>
          <tr>
            <td class="database__property">
              <Icon :icon="Icons.clock" />
              <span>Created</span>
            </td>
            <td class="database__property--val">
              <span v-if="pageDate">{{ pageDate }}</span>
              <span v-else>Empty</span>
            </td>
          </tr>
          <tr v-if="activePage.tags && activePage.tags.length > 0">
            <td class="database__property">
              <Icon :icon="Icons.list" />
              <span>Tags</span>
            </td>

            <td class="database__property--val">
              <div class="multi-select">
                <div
                  v-for="item in activePage.tags"
                  :key="item"
                  :style="{ 'background-color': getColor() }"
                >
                  {{ item }}
                </div>
              </div>
            </td>
          </tr>
        </thead>
      </table>
      <Empty />
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
      cursor: pointer;
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

.database {
  margin-top: 7px;

  td {
    @extend .hover-default;
  }

  &__property {
    @include flex-layout($flex-direction: row, $column-gap: 5px);
    align-items: center;
    width: 160px !important;
    flex-wrap: wrap;

    @media (max-width: $screen-xs) {
      min-width: 100px;
      width: auto !important;
    }

    &--val {
      vertical-align: middle;
    }
  }
}

.multi-select {
  @include flex-layout($flex-direction: row, $row-gap: 5px, $column-gap: 5px);
  align-items: center;
  flex-wrap: wrap;

  div {
    padding: 0.3rem 0.5rem;
    width: max-content;
    border-radius: 2px;
  }
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
