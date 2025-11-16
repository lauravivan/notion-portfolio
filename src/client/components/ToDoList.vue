<script setup lang="ts">
import { Text } from "@/client/components";

const props = defineProps(["items"]);
</script>

<template>
  <ul class="todo-list">
    <li v-for="(item, index) in props.items" :key="index">
      <input
        class="todo-list__checkbox"
        type="checkbox"
        v-model="item.isChecked"
      />
      <Text :style="item.isChecked ? { textDecoration: 'line-through' } : ''">
        {{ item.name }}
      </Text>
    </li>
  </ul>
</template>

<style lang="scss">
@use "@/core/assets/scss/main.scss";
@use "@/core/assets/scss/_var" as var;

.todo-list {
  > li {
    margin: var.$DEFAULT_SPACING 0;
  }

  &__checkbox {
    pointer-events: none;
  }
}
</style>
