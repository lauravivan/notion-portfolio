<template>
  <Empty />
  <Gallery
    :galleryTitle="'Repos'"
    :component="Repo"
    :cardPreviewIsCover="false"
    :pages="pages"
  />
</template>

<script setup lang="ts">
import Gallery from "@/components/Gallery.vue";
import Empty from "@/components/Empty.vue";
import Repo from "@/pages/Repo.vue";
import { computedAsync } from "@vueuse/core";
import createGhPages from "@/util/createGithubPages";

const pages = computedAsync(() => {
  return createGhPages();
});
</script>
