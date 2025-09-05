<template>
  <div class="breadcrumb">
    <div class="breadcrumb__crumb" v-for="page in breadcrumbs" :key="page.id">
      <router-link class="breadcrumb__page" :to="page.path">
        <div>
          <img :src="page.iconPath" style="max-width: 1.1rem; height: auto" />
          <div>{{ page.name }}</div>
        </div>
      </router-link>
      <div v-if="breadcrumbs.length > 2" class="breadcrumb__dots">...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const activePage = computed<Page>(() => store.getters.getActivePage);

const breadcrumbs = computed(() => {
  if (activePage.value) {
    const breadcrumbs = [] as Page[];
    let newActivePage = activePage.value;

    while (newActivePage.parentPage) {
      breadcrumbs.push(newActivePage);
      newActivePage = newActivePage.parentPage;
    }

    return breadcrumbs;
  }

  return [];
});
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;

.breadcrumb {
  @include mixin.flex-layout($flex-direction: row);
  align-items: center;

  &__crumb {
    @include mixin.flex-layout($flex-direction: row);
    align-items: center;
  }

  &__page {
    all: unset;

    > div {
      @include mixin.flex-layout($flex-direction: row, $column-gap: 0.4rem);
      align-items: center;
      @extend .hover-default;
    }
  }
}
</style>
