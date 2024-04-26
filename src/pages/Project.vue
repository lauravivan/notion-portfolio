<template>
  <Database
    v-if="!props.hideDatabase && page"
    :multiSelectItems="page.pageData.languages"
  >
    <template #dateTimeDesc>Created</template>
    <template #multiSelectDesc>Used languages</template>
  </Database>
  <div class="project" v-if="page">
    <Text
      >Access here:
      <a target="_blank" :href="page.pageData.homepage"
        >Link to project</a
      ></Text
    >

    <Heading headingNumber="3"> Preview: </Heading>

    <iframe class="iframe" :src="page.pageData.homepage"></iframe>
  </div>
</template>

<script setup>
import { activePage } from "global";
import Database from "components/Database.vue";
import Text from "UIElements/Text.vue";
import Heading from "UIElements/Heading.vue";
import { ref, onMounted } from "vue";

const props = defineProps(["page", "hideDatabase"]);
const page = ref(null);

onMounted(() => {
  if (props.page) {
    page.value = props.page;
  } else {
    page.value = activePage.value;
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.iframe {
  width: 100%;
  height: 330px;
}
</style>
