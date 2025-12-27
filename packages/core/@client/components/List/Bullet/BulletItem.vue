<script setup lang="ts">
import { Text } from "../..";
import Icon from "@core/@client/components/Icon.vue";
import { Icons } from "@core/enum";
</script>

<template>
  <li class="bullet-item">
    <Icon class="bullet-item__icon" :icon="Icons.circle" />
    <Text class="bullet-item__item"><slot /> </Text>
  </li>
</template>

<style lang="scss">
.bullet-item {
  display: flex;
  align-items: center;
  column-gap: 10px;

  &__icon {
    font-size: $fs-xs;
    color: $black-7;
  }

  &__item {
    margin: 0;
  }
}
</style>
