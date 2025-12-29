<script setup lang="ts">
import type { PageInfo } from "@core/@types";
import { useStore } from "@core/store";
import { setDynamicPageInfo, setTheme } from "@core/util/local-storage";
import { onBeforeUnmount, onMounted, watch } from "vue";
import DatabaseInfo from "@core/components/DatabaseInfo.vue";
import { Banner, Content, Title, Wrapper } from "@core/components/Content";
import { Empty } from "@core/@client/components";

const { activePage } = defineProps<{ activePage: PageInfo }>();

const store = useStore;

function saveTheme() {
  setTheme(store.getTheme);
}

watch(
  () => store.theme,
  (newTheme) => {
    document.body.className = "";
    document.body.classList.add(newTheme);
  }
);

function saveDynamicInfo() {
  setDynamicPageInfo(store.getDynamicPageInfo);
}

onMounted(() => {
  window.addEventListener("beforeunload", saveTheme);
  window.addEventListener("beforeunload", saveDynamicInfo);
  document.body.className = "";
  document.body.classList.add(store.getTheme);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", saveTheme);
  window.removeEventListener("beforeunload", saveDynamicInfo);
});
</script>

<template>
  <Wrapper>
    <Banner :page="activePage" />
    <Content :page="activePage">
      <Title :page="activePage" />
      <DatabaseInfo :page="activePage" />
      <Empty />
      <router-view></router-view>
    </Content>
  </Wrapper>
</template>
