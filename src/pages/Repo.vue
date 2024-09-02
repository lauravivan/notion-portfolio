<template>
  <Database
    v-if="!props.hideDatabase && props.page"
    :multiSelectItems="props.page.pageData.languages"
  >
    <template #dateTimeDesc>Created</template>
    <template #multiSelectDesc>Used languages</template>
  </Database>
  <div class="repo" v-if="props.page">
    <div class="repo__metrics">
      <div class="repo__metric">
        <Icon :icon="icons.star" />
        <div>{{ props.page.pageData.starsCount }}</div>
      </div>
      <div class="repo__metric">
        <Icon :icon="icons.eye" />
        <div>{{ props.page.pageData.watchersCount }}</div>
      </div>
      <div class="repo__metric">
        <Icon :icon="icons.forkCode" />
        <div>{{ props.page.pageData.forksCount }}</div>
      </div>
    </div>
    <Empty />
    <Text v-if="props.page.pageData.description"
      >Description: {{ props.page.pageData.description }}</Text
    >
    <Empty />
    <Text style="display: flex; flex-wrap: wrap; column-gap: 10px">
      <Icon :icon="icons.code" />
      <span class="highlight">Link github: </span
      ><a :href="props.page.pageData.gitUrl">{{
        props.page.pageData.gitUrl
      }}</a>
    </Text>
    <Text
      v-if="props.page.pageData.homepage"
      style="display: flex; flex-wrap: wrap; column-gap: 10px"
    >
      <Icon :icon="icons.link" />
      <span class="highlight">Link page: </span
      ><a :href="props.page.pageData.gitUrl">{{
        props.page.pageData.homepage
      }}</a>
    </Text>
  </div>
</template>

<script setup>
import Database from "components/Database.vue";
import Icon from "components/Icon.vue";
import { icons } from "global";
import Text from "components/Text.vue";
import Empty from "components/Empty.vue";

const props = defineProps(["page", "hideDatabase"]);
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.repo {
  &__metrics {
    @include flex-layout($flex-direction: row, $column-gap: 15px);
  }

  &__metric {
    @include flex-layout($flex-direction: row, $column-gap: 10px);
  }
}
</style>
