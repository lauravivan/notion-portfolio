<script setup lang="ts">
import type { PageInfo } from "@core/@types";

const { page } = defineProps<{ page: PageInfo }>();
</script>

<template>
  <div v-if="page.banner" class="page-banner">
    <img :src="page.banner.path" />
    <a
      v-if="page.banner.link && page.banner.author"
      :href="page.banner.link"
      target="_blank"
      >{{ page.banner.author }}</a
    >
  </div>
</template>

<style scoped lang="scss">
.page-banner {
  width: 100%;
  height: 210px;
  max-height: 210px;
  position: relative;

  a {
    all: unset;
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
</style>
