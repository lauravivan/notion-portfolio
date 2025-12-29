<script setup lang="ts">
import type { PageInfo } from "@core/@types";

const { page } = defineProps<{ page: PageInfo }>();
</script>

<template>
  <div class="page-title">
    <div class="page-title__img-wrapper">
      <img v-if="page.icon" :src="page.icon.path" /><a
        v-if="page.icon?.link && page.icon?.author"
        target="_blank"
        :href="page.icon.link"
        >{{ page.icon.author }}</a
      >
    </div>
    <span>{{ page.title }}</span>
  </div>
</template>

<style scoped lang="scss">
.page-title {
  display: flex;
  flex-direction: column;
  row-gap: 40px;

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

@media (min-width: $screen-small) {
  .font-size-small .page-title {
    span {
      font-size: $fs-large + 0.7rem;
    }
  }
}

@media (max-width: $screen-xs) {
  .page-wrapper .page-title {
    span {
      font-size: $fs-xl;
    }
  }
}
</style>
