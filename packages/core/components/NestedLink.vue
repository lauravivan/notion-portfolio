<script setup lang="ts">
import type { IMetadata } from "@core/@types";
import NavLink from "./NavLink.vue";

const props = defineProps<{ ids: string[]; metadata: IMetadata }>();

function getSubPages(ids: string[]) {
  function search(ids: string[]) {
    for (let id of ids) {
      const page = props.metadata.pages[id];
      if (page && page.pages && Object.keys(page.pages).length > 0) {
        search(page.pages);
      }
    }

    return ids;
  }
  return search(ids);
}
</script>

<template>
  <div class="nested-link">
    <NavLink
      v-for="id in props.ids"
      :key="id"
      :page="props.metadata.pages[id]"
      :metadata="props.metadata"
    >
      <template
        v-if="props.metadata.pages[id] && props.metadata.pages[id].pages"
        ><NavLink
          :page="props.metadata.pages[subPageId]"
          v-for="subPageId in getSubPages(props.metadata.pages[id].pages)"
          :key="subPageId"
          :metadata="props.metadata"
        ></NavLink
      ></template>
    </NavLink>
  </div>
</template>
