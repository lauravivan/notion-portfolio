<script setup lang="ts">
import { useStore } from "@core/store";
import { computed } from "vue";

const store = useStore;

const breadcrumbs = computed(() => {
  if (store.activePage) {
    const breadcrumbs = [store.activePage];
    let newActivePage = store.activePage;

    while (newActivePage.parentPage) {
      breadcrumbs.unshift(newActivePage);
      newActivePage = newActivePage.parentPage;
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
      <router-link to="/" class="breadcrumb__page">
        <div>
          <img style="max-width: 1.1rem; height: auto" />
          <div>{{ page.title }}</div>
        </div>
      </router-link>
      <div v-if="index !== breadcrumbs.length - 1">/</div>
      <div v-if="breadcrumbs.length > 2" class="breadcrumb__dots">...</div>
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
      @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
      align-items: center;
      @extend .hover-default;
    }
  }
}
</style>
