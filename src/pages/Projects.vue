<template>
  <Empty />
  <Gallery
    :galleryTitle="'My Projects'"
    :cardPreviewIsCover="true"
    :component="Project"
  />
</template>

<script setup>
import Gallery from "components/Gallery.vue";
import Empty from "components/Empty.vue";
import Project from "@/pages/Project.vue";
</script>
