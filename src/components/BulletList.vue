<template>
  <ul class="bullet-list">
    <li v-for="(item, index) in props.items" :key="index">
      <Icon class="bullet-list__icon" :icon="icons.circle" />
      <Text class="bullet-list__item"> {{ item }} </Text>
    </li>
  </ul>
</template>

<script setup>
import Text from "components/Text.vue";
import { icons } from "global";
import Icon from "components/Icon.vue";

const props = defineProps(["items"]);
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.bullet-list {
  > li {
    display: flex;
    align-items: flex-start;
    column-gap: 10px;
  }

  &__icon {
    font-size: $fs-xs - 0.1rem;
    margin-top: 3px;
    color: $black;
  }

  &__item {
    margin: 0;
  }
}
</style>
