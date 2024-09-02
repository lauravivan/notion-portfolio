<template>
  <div class="nested-link">
    <NavLink v-for="page in props.pages" :key="page.pageId" :page="page">
      <NavLink
        :page="subPage"
        v-for="subPage in getSubPages(page.pages)"
        :key="subPage.pageId"
      ></NavLink>
    </NavLink>
  </div>
</template>

<script setup>
import NavLink from "components/NavLink.vue";
import { getSubPages } from "util/util";

const props = defineProps(["pages"]);
</script>
