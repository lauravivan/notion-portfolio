<script setup lang="ts">
import { Text, Icon } from ".";
import { Icons } from "@core/enum";

const props = defineProps(["items"]);
</script>

<template>
  <ul class="bullet-list">
    <li v-for="(item, index) in props.items" :key="index">
      <Icon class="bullet-list__icon" :icon="Icons.circle" />
      <Text class="bullet-list__item"> {{ item }} </Text>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@core/assets/scss/main.scss";
@use "@core/assets/scss/_var" as var;

.bullet-list {
  > li {
    display: flex;
    align-items: flex-start;
    column-gap: 10px;
  }

  &__icon {
    font-size: var.$fs-xs - 0.1rem;
    margin-top: 3px;
    color: var.$black;
  }

  &__item {
    margin: 0;
  }
}
</style>
