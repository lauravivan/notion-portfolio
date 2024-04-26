<template>
  <Database
    v-if="!props.hideDatabase && page"
    :multiSelectItems="page.pageData.languages"
  >
    <template #dateTimeDesc>Created</template>
    <template #multiSelectDesc>Used languages</template>
  </Database>
  <div class="repo" v-if="page">
    <div class="repo__metrics">
      <div class="repo__metric">
        <Icon :icon="icons.star" />
        <div>{{ page.pageData.starsCount }}</div>
      </div>
      <div class="repo__metric">
        <Icon :icon="icons.eye" />
        <div>{{ page.pageData.watchersCount }}</div>
      </div>
      <div class="repo__metric">
        <Icon :icon="icons.forkCode" />
        <div>{{ page.pageData.forksCount }}</div>
      </div>
    </div>
    <Empty />
    <Text><span>Description: </span>{{ page.pageData.description }}</Text>
    <Empty />
    <Text style="display: flex; column-gap: 10px">
      <Icon :icon="icons.code" />
      <span class="highlight">Link github: </span
      ><a :href="page.pageData.gitUrl">{{ page.pageData.gitUrl }}</a>
    </Text>
    <Text v-if="page.pageData.homepage" style="display: flex; column-gap: 10px">
      <Icon :icon="icons.link" />
      <span class="highlight">Link page: </span
      ><a :href="page.pageData.gitUrl">{{ page.pageData.homepage }}</a>
    </Text>
  </div>
</template>

<script setup>
import Database from "components/Database.vue";
import Icon from "UIElements/Icon.vue";
import { icons, activePage } from "global";
import Text from "UIElements/Text.vue";
import Empty from "UIElements/Empty.vue";
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

.repo {
  &__metrics {
    @include flex-layout($flex-direction: row, $column-gap: 15px);
  }

  &__metric {
    @include flex-layout($flex-direction: row, $column-gap: 10px);
  }
}
</style>
