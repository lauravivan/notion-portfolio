<template>
  <Empty />
  <Gallery
    :galleryTitle="'Repos'"
    :pages="activePage.pages"
    :component="Repo"
    :cardPreviewIsCover="false"
  />
</template>

<script setup>
import Gallery from "components/Gallery.vue";
import Empty from "UIElements/Empty.vue";
import { activePage } from "global";
import Repo from "@/pages/Repo.vue";
</script>
