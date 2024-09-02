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

<script setup>
import Text from "components/Text.vue";

const props = defineProps(["items"]);
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.todo-list {
  > li {
    margin: $DEFAULT_SPACING 0;
  }

  &__checkbox {
    pointer-events: none;
  }
}
</style>
