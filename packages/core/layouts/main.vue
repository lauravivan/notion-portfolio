<script setup lang="ts">
import type { PageInfo } from "@core/@types";
import { useStore } from "@core/store";
import { setDynamicPageInfo, setTheme } from "@core/util/local-storage";
import { onBeforeUnmount, onMounted, watch } from "vue";
import { Icons } from "@core/enum";
import Icon from "@core/@client/components/Icon.vue";

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

watch(
  () => store.theme,
  (newTheme) => {
    document.body.className = "";
    document.body.classList.add(newTheme);
  }
);

function saveDynamicInfo() {
  setDynamicPageInfo(store.getDynamicPageInfo);
}

onMounted(() => {
  window.addEventListener("beforeunload", saveTheme);
  window.addEventListener("beforeunload", saveDynamicInfo);
  document.body.className = "";
  document.body.classList.add(store.getTheme);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", saveTheme);
  window.removeEventListener("beforeunload", saveDynamicInfo);
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
    <div v-if="activePage.banner" class="page-banner">
      <img :src="activePage.banner.path" />
      <a :href="activePage.banner.link" target="_blank">{{
        activePage.banner.author
      }}</a>
    </div>
    <div
      class="page-content"
      :class="{
        'page-content--banner': activePage.banner?.path,
        'page-content--icon': activePage.icon,
      }"
    >
      <div class="page-title">
        <div class="page-title__img-wrapper">
          <img v-if="activePage.icon" :src="activePage.icon.path" /><a
            v-if="activePage.icon?.link && activePage.icon?.author"
            target="_blank"
            :href="activePage.icon.link"
            >{{ activePage.icon.author }}</a
          >
        </div>
        <span>{{ activePage.title }}</span>
      </div>
      <table
        class="database"
        v-if="activePage.parentPage && activePage.databaseInfo"
      >
        <thead>
          <tr>
            <th></th>
            <th width="100%"></th>
          </tr>
          <tr
            v-for="[key, value] in Object.entries(activePage.databaseInfo)"
            class="database__properties"
            :key="key"
          >
            <td class="database__property">
              <Icon v-if="value.icon" :icon="Icons[value.icon]" />
              <span>{{ key }}</span>
            </td>
            <td class="database__property database__property--val">
              <span v-if="value.value && typeof value.value === 'string'">{{
                value.value
              }}</span>
              <div
                v-else-if="Array.isArray(value.value) && value.value.length > 0"
                class="multi-select"
              >
                <div
                  v-for="item in value.value"
                  :key="item"
                  :style="{ 'background-color': getColor() }"
                >
                  {{ item }}
                </div>
              </div>
              <span v-else>Empty</span>
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
      display: block;
      position: absolute;
      background-color: $gray;
      color: $black;
      bottom: 0;
      right: 0;
      margin-right: 20px;
      margin-bottom: 15px;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      z-index: 50;

      &:hover {
        color: $black-8;
        background-color: $gray-9;
      }
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
    top: 70px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 1;
    width: 50%;
    row-gap: $DEFAULT_SPACING;

    .page-title {
      @include flex-layout($row-gap: 40px);
      margin-bottom: 20px;

      &__img-wrapper {
        display: flex;
        flex-direction: column;
        width: max-content;

        a {
          cursor: pointer;
          font-size: 11px;
          align-self: flex-end;
        }
      }

      img {
        max-width: 5.8rem;
      }

      span {
        font-size: 2.5rem;
        font-weight: $fw-900;
      }
    }

    &--banner {
      top: 230px;
    }

    &--icon {
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
  margin-bottom: 20px;

  &__properties {
    display: flex;
  }

  &__property {
    display: flex;
    column-gap: 5px;
    align-items: center;
    width: 160px !important;
    flex-wrap: wrap;
    @extend .hover-default;

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
  display: flex;
  gap: 5px;
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
    div:not(:has(h1, h2, h3, h4)) {
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
      padding: 0 50px;
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
