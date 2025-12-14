<script setup lang="ts">
import { computed } from "vue";
// import { useStore } from "vuex";

// const store = useStore;
// const activePage = computed<PageInfo>(() => store.getters.getActivePage);

const breadcrumbs = computed(() => {
  // if (activePage.value) {
  //   const breadcrumbs = [] as PageInfo[];
  //   let newActivePage = activePage.value;

  //   while (newActivePage.parentPage) {
  //     breadcrumbs.unshift(newActivePage);
  //     newActivePage = newActivePage.parentPage;
  //   }

  //   return breadcrumbs;
  // }

  return [];
});
</script>

<template>
  <div class="breadcrumb">
    <div class="breadcrumb__crumb" v-for="(_, index) in breadcrumbs">
      <router-link to="/" class="breadcrumb__page">
        <div>
          <img style="max-width: 1.1rem; height: auto" />
          <!-- <div>{{ page.title }}</div> -->
        </div>
      </router-link>
      <div v-if="index !== breadcrumbs.length - 1">/</div>
      <div v-if="breadcrumbs.length > 2" class="breadcrumb__dots">...</div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/assets/scss/main";
@use "@core/assets/scss/_mixin.scss" as mixin;

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
