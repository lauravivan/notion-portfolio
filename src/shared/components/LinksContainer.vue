<template>
  <div class="links-container">
    <h3 class="links-container__category">{{ category.categoryName }}</h3>
    <div class="links-container__category-items" :id="category.categoryName">
      <div v-for="page in category.categoryPages" :key="page.pageId">
        <NavItem :page="page" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavItem from "UIElements/NavItem.vue";

const category = defineProps(["categoryName", "categoryPages"]);
</script>

<style lang="scss">
@import "@/assets/scss/main";

.links-container {
  &__category {
    font-size: $fs-medium;
    margin-bottom: 0.6rem;
    font-weight: $fw-600;
  }

  &__category-items {
    & > div > a {
      all: unset;
      display: block;
      cursor: pointer;
      border-radius: 3%;
      transition: background-color 0.1s;

      &:hover {
        background-color: $gray-4;
      }

      &:active {
        background-color: $gray;
      }
    }

    a > div {
      @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
      margin-bottom: 0.1rem;
      align-items: center;
      width: 100%;
      padding: 0.28rem;
      border-radius: 3%;
      cursor: pointer;
    }
  }
}
</style>
