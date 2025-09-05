<template>
  <ul class="bullet-list">
    <li v-for="(item, index) in props.items" :key="index">
      <Icon class="bullet-list__icon" :icon="icons.circle" />
      <Text class="bullet-list__item"> {{ item }} </Text>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Text from "@/components/Text.vue";
import Icon from "@/components/Icon.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const props = defineProps(["items"]);
const icons = computed(() => store.getters.getIcons);
</script>

<style scoped lang="scss">
@use "@/assets/scss/main.scss";
@use "@/assets/scss/_var" as var;

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
