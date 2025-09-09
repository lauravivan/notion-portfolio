<template>
  <Empty />
  <Gallery
    :galleryTitle="'Repos'"
    :component="Repo"
    :cardPreviewIsCover="false"
    :pages="pages"
    v-if="pages"
  />
</template>

<script setup lang="ts">
import Gallery from "@/components/Gallery.vue";
import Empty from "@/components/Empty.vue";
import Repo from "@/pages/Repo.vue";
import { computedAsync } from "@vueuse/core";
import { useStore } from "vuex";

const store = useStore();

const pages = computedAsync(async () => {
  const pages = store.getters.getPages;
  return await pages.github.pages;
});
</script>
