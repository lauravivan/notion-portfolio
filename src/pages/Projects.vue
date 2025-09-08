<template>
  <Empty />
  <Gallery
    galleryTitle="My Projects"
    :cardPreviewIsCover="true"
    :component="Project"
    :pages="pages"
  />
</template>

<script setup lang="ts">
import Gallery from "@/components/Gallery.vue";
import Empty from "@/components/Empty.vue";
import Project from "@/pages/Project.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const pages = computed(() => {
  const pages = store.getters.getPages;
  return pages.projects.pages;
});
</script>
