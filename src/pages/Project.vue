<template>
  <Database
    v-if="!props.hideDatabase && props.page"
    :multiSelectItems="props.page.ghData.languages"
  >
    <template #dateTimeDesc>Created</template>
    <template #multiSelectDesc>Used languages</template>
  </Database>
  <div class="project" v-if="props.page">
    <Heading headingNumber="3" v-if="props.page.about">About</Heading>

    <Text v-if="props.page.about">{{ props.page.about }}</Text>

    <Empty v-if="props.page.about" />

    <Heading headingNumber="3" v-if="props.page.why"
      >Reasons to creating this project</Heading
    >
    <Text>{{ props.page.why }}</Text>

    <Empty v-if="props.page.why" />

    <Heading headingNumber="3" v-if="props.page.considerations"
      >Considerations</Heading
    >
    <Text>{{ props.page.considerations }}</Text>

    <Empty v-if="props.page.considerations" />

    <Empty v-if="props.page.more && props.page.more.tddLink" />

    <Heading headingNumber="3" v-if="props.page.more && props.page.more.tddLink"
      >TDD (Technical Design Document)</Heading
    >

    <Link
      v-if="props.page.more && props.page.more.tddLink"
      :href="props.page.more.tddLink"
      emoji="📋"
      >Link to TDD</Link
    >

    <Empty v-if="props.page.more && props.page.more.tddLink" />

    <Heading headingNumber="3">Where you can access</Heading>

    <Link target="_blank" :href="props.page.ghData.url" emoji="🧑‍🦯‍➡️"
      >Link to project</Link
    >
  </div>
</template>

<script setup lang="ts">
import Database from "@/components/Database.vue";
import Text from "@/components/Text.vue";
import Heading from "@/components/Heading.vue";
import Empty from "@/components/Empty.vue";
import Link from "@/components/Link.vue";

const props = defineProps(["page", "hideDatabase"]);
</script>
