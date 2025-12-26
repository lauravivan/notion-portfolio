<script setup lang="ts">
import type { IMetadata } from "@core/@types";
import { useStore } from "@core/store";
import { computed } from "vue";

const props = defineProps<{ metadata: IMetadata }>();

const store = useStore;

const breadcrumbs = computed(() => {
  if (store.activePage) {
    const breadcrumbs = [];
    let newActivePage = store.activePage;

    if (newActivePage.parentPage) {
      breadcrumbs.unshift(newActivePage);

      const parentPage = props.metadata.pages[newActivePage.parentPage];

      while (parentPage) {
        newActivePage = parentPage;
        breadcrumbs.unshift(newActivePage);
      }
    } else {
      breadcrumbs.push(newActivePage);
    }

    return breadcrumbs;
  }

  return [];
});
</script>

<template>
  <div class="breadcrumb">
    <div
      class="breadcrumb__crumb"
      v-for="(page, index) in breadcrumbs"
      :key="page.id"
    >
      <router-link :to="page.path" class="breadcrumb__page">
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
  @include flex-layout($flex-direction: row);
  align-items: center;

  &__crumb {
    @include flex-layout($flex-direction: row);
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
