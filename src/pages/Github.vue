<template>
  <Empty />
  <Gallery
    :galleryTitle="'Repos'"
    :component="Repo"
    :cardPreviewIsCover="false"
  />
</template>

<script setup>
import Gallery from "components/Gallery.vue";
import Empty from "UIElements/Empty.vue";
import Repo from "@/pages/Repo.vue";
</script>
