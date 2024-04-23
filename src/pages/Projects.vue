<template>
  <Empty />
  <Gallery
    :galleryTitle="'My Projects'"
    :pages="activePage.pages"
    :cardPreviewIsCover="true"
    :component="Project"
  />
</template>

<script setup>
import Gallery from "components/Gallery.vue";
import Empty from "UIElements/Empty.vue";
import { activePage } from "global";
import Project from "@/pages/Project.vue";
</script>
