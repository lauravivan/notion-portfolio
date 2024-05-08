<template>
  <div class="breadcrumb">
    <div
      class="breadcrumb__crumb"
      v-for="(page, index) in getBreadcrumbs()[0]"
      :key="page"
    >
      <router-link class="breadcrumb__page" :to="page.pagePath">
        <div>
          <img :src="page.pageIcon" style="max-width: 1.1rem; height: auto" />
          <div>{{ page.pageName }}</div>
        </div>
      </router-link>
      <div v-if="index < getBreadcrumbs()[1]">/</div>
    </div>
  </div>
</template>

<script setup>
import { activePage } from "global";
import { useStore } from "vuex";

const store = useStore();

function getBreadcrumbs() {
  let breadcrumbs = [];

  if (activePage && activePage.value) {
    if (activePage.value.pagePath === "/") {
      return [[activePage.value], 0];
    }

    breadcrumbs = activePage.value.pagePath.split("/");
  }

  const result = getPages(breadcrumbs);
  const resultLength = result.length - 1;

  return [result, resultLength];
}

function getPages(breadcrumbs) {
  const pages = [];
  const pagesInfo = store.getters.getPagesInfo;

  function search(pgs) {
    for (let page in pgs) {
      breadcrumbs.map((breadcrumb) => {
        if (breadcrumb == pgs[page].key) {
          pages.push(pgs[page]);

          if (Object.keys(pgs[page].pages).length > 0) {
            search(pgs[page].pages);
          }
        }
      });
    }
  }

  search(pagesInfo);
  return pages;
}
</script>

<style lang="scss">
@import "@/assets/scss/main";

.breadcrumb {
  @include flex-layout($flex-direction: row);
  align-items: center;

  &__crumb {
    @include flex-layout($flex-direction: row);
    align-items: center;
  }

  &__page {
    all: unset;

    > div {
      @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
      align-items: center;
      @extend .hover-default;
    }
  }
}
</style>
