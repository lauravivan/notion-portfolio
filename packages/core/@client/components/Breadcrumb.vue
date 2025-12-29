<script setup lang="ts">
import type { IMetadata, PageInfo } from "@core/@types";
import { useStore } from "@core/store";
import { computed } from "vue";

const props = defineProps<{ metadata: IMetadata }>();

const store = useStore;

const breadcrumbs = computed(() => {
  if (store.activePage) {
    const breadcrumbs = [];
    let newActivePage = store.activePage;

    if (newActivePage.parentPage) {
      let parentPage = props.metadata.pages[newActivePage.parentPage];
      breadcrumbs.unshift(newActivePage);

      while (parentPage) {
        newActivePage = parentPage;
        breadcrumbs.unshift(newActivePage);

        if (newActivePage.parentPage) {
          parentPage = props.metadata.pages[newActivePage.parentPage];
        } else {
          parentPage = undefined;
        }
      }
    } else {
      breadcrumbs.push(newActivePage);
    }

    return breadcrumbs;
  }

  return [];
});

const handleCrumb = (page: PageInfo) => {
  store.storeUpdateTabs(page);
};
</script>

<template>
  <div class="breadcrumb">
    <div
      class="breadcrumb__crumb"
      v-for="(page, index) in breadcrumbs"
      :key="page.id"
    >
      <router-link
        v-if="page.path"
        class="breadcrumb__page"
        :to="page.path"
        @click="handleCrumb(page)"
      >
        <div>
          <img
            v-if="page.icon"
            style="max-width: 1.1rem; height: auto"
            :src="page.icon.path"
          />
          <span :title="page.title">{{ page.title }}</span>
        </div>
      </router-link>
      <div v-if="index !== breadcrumbs.length - 1">/</div>
    </div>
  </div>
</template>

<style lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;

  &__crumb {
    display: flex;
    align-items: center;
  }

  &__page {
    all: unset;

    > div {
      display: flex;
      column-gap: 0.4rem;
      align-items: center;

      @extend .hover-default;

      span {
        width: auto;
        max-width: 7rem;
        @extend .ellipsis;
      }
    }
  }
}
</style>
