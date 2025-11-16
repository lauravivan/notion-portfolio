<script setup lang="ts">
import { Aside, Header, useStore } from "../core/index.ts";
import { onMounted, watch } from "vue";
import { useAside } from "../core/hooks";
import { useRoute } from "vue-router";
import metadata from "./metadata";

const route = useRoute();
const { mainContainerClasses, mainContentClasses } = useAside();
const store = useStore();

const theme = store.getTheme;

watch(() => store.theme, (newTheme) => {
  document.body.className = "";
  document.body.classList.add(newTheme);
});

onMounted(() => {
  document.body.className = "";
  document.body.classList.add(theme);
});
</script>

<template>
  <div v-if="route.name === 'NotFound'">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :previousRoute="route.meta.previousRoute" />
    </router-view>
  </div>
  <div v-else class="app">
    <div :class="mainContainerClasses">
      <Aside :metadata="metadata" />

      <div :class="mainContentClasses">
        <Tabs :route="route" />

        <Header />

        <router-view v-slot="{ Component }">
          <component :is="Component" :activePage="store.getActivePage"/>
        </router-view>

        <footer class="footer">by Notion Portfolio (^.^)</footer>
      </div>
    </div>
  </div>
</template>