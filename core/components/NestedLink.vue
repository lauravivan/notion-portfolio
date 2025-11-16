<script setup lang="ts">
import NavLink from "./NavLink.vue";

const props = defineProps(["pages"]);

function getSubPages(pages: PageInfo[]) {
  function search(pages: PageInfo[]) {
    for (let page of pages) {
      if (page.pages && Object.keys(page.pages).length > 0) {
        search(page.pages);
      }
    }

    return pages;
  }
  return search(pages);
}
</script>

<template>
  <div class="nested-link">
    <NavLink v-for="page in props.pages" :key="page.id" :page="page">
      <NavLink
        :page="subPage"
        v-for="subPage in getSubPages(page.pages)"
        :key="subPage.id"
      ></NavLink>
    </NavLink>
  </div>
</template>
