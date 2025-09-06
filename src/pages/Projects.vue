<template>
  <Empty />
  <Gallery
    galleryTitle="My Projects"
    :cardPreviewIsCover="true"
    :component="Project"
    :pages="pages"
    v-if="pages"
  />
</template>

<script setup lang="ts">
import Gallery from "@/components/Gallery.vue";
import Empty from "@/components/Empty.vue";
import Project from "@/pages/Project.vue";
import createProjectPages from "@/util/createProjectPages";
import { computedAsync } from "@vueuse/core";

const pages = computedAsync(async () => {
  return await createProjectPages();
});
</script>
