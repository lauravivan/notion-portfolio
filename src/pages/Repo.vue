<template>
  <Database
    v-if="!props.hideDatabase && props.page"
    :multiSelectItems="props.page.ghData.languages"
  >
    <template #dateTimeDesc>Created</template>
    <template #multiSelectDesc>Used languages</template>
  </Database>
  <div class="repo" v-if="props.page">
    <div class="repo__metrics">
      <div class="repo__metric">
        <Icon :icon="icons.star" />
        <div>{{ props.page.ghData.starCount }}</div>
      </div>
      <div class="repo__metric">
        <Icon :icon="icons.eye" />
        <div>{{ props.page.ghData.watchCount }}</div>
      </div>
      <div class="repo__metric">
        <Icon :icon="icons.forkCode" />
        <div>{{ props.page.ghData.forkCount }}</div>
      </div>
    </div>
    <Empty />
    <Text v-if="props.page.ghData.desc"
      >Description: {{ props.page.ghData.desc }}</Text
    >
    <Empty />
    <Text style="display: flex; flex-wrap: wrap; column-gap: 10px">
      <Icon :icon="icons.code" />
      <span class="highlight">Link github: </span
      ><a :href="props.page.ghData.gitUrl">{{ props.page.ghData.gitUrl }}</a>
    </Text>
    <Text
      v-if="props.page.ghData.url"
      style="display: flex; flex-wrap: wrap; column-gap: 10px"
    >
      <Icon :icon="icons.link" />
      <span class="highlight">Link page: </span
      ><a :href="props.page.ghData.ghUrl">{{ props.page.ghData.url }}</a>
    </Text>
  </div>
</template>

<script setup lang="ts">
import Database from "@/components/Database.vue";
import Icon from "@/components/Icon.vue";
import Text from "@/components/Text.vue";
import Empty from "@/components/Empty.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const icons = computed(() => store.getters.getIcons);

const props = defineProps(["page", "hideDatabase"]);
</script>

<style lang="scss">
@use "@/assets/scss/main.scss";
@use "@/assets/scss/_mixin.scss" as mixin;

.repo {
  &__metrics {
    @include mixin.flex-layout($flex-direction: row, $column-gap: 15px);
  }

  &__metric {
    @include mixin.flex-layout($flex-direction: row, $column-gap: 10px);
  }
}
</style>
