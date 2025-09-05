<template>
  <ul class="todo-list">
    <li v-for="(item, index) in props.items" :key="index">
      <input
        class="todo-list__checkbox"
        type="checkbox"
        v-model="item.isChecked"
      />
      <Text :style="item.isChecked ? { textDecoration: 'line-through' } : ''">
        {{ item.item }}
      </Text>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Textfrom from "@/components/Text.vue";

const props = defineProps(["items"]);
</script>

<style lang="scss">
@use "@/assets/scss/main.scss";
@use "@/assets/scss/_var" as var;

.todo-list {
  > li {
    margin: var.$DEFAULT_SPACING 0;
  }

  &__checkbox {
    pointer-events: none;
  }
}
</style>
