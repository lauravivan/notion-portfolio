<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = defineProps<{ isChecked?: boolean }>();

const emit = defineEmits<{
  "update:isChecked": [value: boolean];
}>();

const value = useVModel(props, "isChecked", emit);
</script>

<template>
  <li class="todo-item">
    <input class="todo-item__checkbox" type="checkbox" v-model="value" />
    <Text :style="props.isChecked ? { textDecoration: 'line-through' } : ''">
      <slot />
    </Text>
  </li>
</template>

<style lang="scss">
.todo-item {
  &__checkbox {
    pointer-events: none;
  }
}
</style>
