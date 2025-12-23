<script setup lang="ts">
import type { PageInfo } from "@core/@types";
import DatabaseGalleryLayout from "./DatabaseGalleryLayout.vue";
import DatabaseTableLayout from "./DatabaseTableLayout.vue";
import { type Component } from "vue";

const props = defineProps<{
  layout: "gallery" | "table";
  title: string;
  cardPreviewIsCover?: boolean;
  component: Component;
  pages: PageInfo[];
}>();
</script>

<template>
  <DatabaseGalleryLayout
    v-if="props.layout === 'gallery'"
    :card-preview-is-cover="props.cardPreviewIsCover"
    :title="props.title"
    :pages="props.pages"
    :component="props.component"
  />
  <DatabaseTableLayout v-else />
</template>
