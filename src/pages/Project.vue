<template>
  <Database
    v-if="!props.hideDatabase && props.page"
    :multiSelectItems="props.page.pageData.languages"
  >
    <template #dateTimeDesc>Created</template>
    <template #multiSelectDesc>Used languages</template>
  </Database>
  <div class="project" v-if="props.page">
    <Heading headingNumber="3">Reasons to creating this project</Heading>
    <Text>{{ props.page.pageDesc }}</Text>

    <Empty />

    <Heading headingNumber="3">Where you can access</Heading>

    <Text>
      <a target="_blank" :href="props.page.pageData.homepage"
        >Link to project</a
      ></Text
    >

    <Empty />

    <Heading headingNumber="3">Preview</Heading>

    <Iframe :src="props.page.pageData.homepage" />
  </div>
</template>

<script setup>
import Database from "components/Database.vue";
import Text from "components/Text.vue";
import Heading from "components/Heading.vue";
import Empty from "components/Empty.vue";
import Iframe from "components/Iframe.vue";

const props = defineProps(["page", "hideDatabase"]);
</script>
