<script setup lang="ts">
import ToDoItem from "./ToDoItem.vue";

const props = defineProps<{ items?: { isChecked: boolean; name: string }[] }>();
</script>

<template>
  <ul class="todo-list">
    <template v-if="props.items && props.items.length > 0"
      ><ToDoItem
        v-for="(item, index) in props.items"
        :key="`${item.name}-${index}`"
        :is-checked="item.isChecked"
        >{{ item.name }}</ToDoItem
      ></template
    >
    <template v-else><slot /></template>
  </ul>
</template>
