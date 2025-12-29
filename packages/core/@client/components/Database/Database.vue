<script setup lang="ts">
import type { PageInfo } from "@core/@types";
import DatabaseGalleryLayout from "./DatabaseGalleryLayout.vue";
import DatabaseTableLayout from "./DatabaseTableLayout.vue";

const props = defineProps<{
  layout: "gallery" | "table";
  title?: string;
  cardPreviewIsCover?: boolean;
  pages: PageInfo[];
}>();
</script>

<template>
  <DatabaseGalleryLayout
    v-if="props.layout === 'gallery'"
    :card-preview-is-cover="props.cardPreviewIsCover"
    :title="props.title"
    :pages="props.pages"
  />
  <DatabaseTableLayout v-else />
</template>
