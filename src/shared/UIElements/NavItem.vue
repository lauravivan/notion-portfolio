<template>
  <router-link :to="page.page.pagePath">
    <div>
      <arrow-icon :is="arrowIcon"></arrow-icon>
      <div style="max-width: 1.1rem; height: auto">
        <img :src="page.page.pageIcon" style="width: 100%; height: auto" />
      </div>
      <span>{{ page.page.pageName }}</span>
    </div>
  </router-link>
</template>

<script setup>
import ChevronRightSvg from "components/icons/ChevronRight.vue";

const page = defineProps(["page"]);

const arrowIcon = ChevronRightSvg;
</script>
