<template>
  <div v-if="numberOfColumns" class="columns">
    <div class="columns__column" v-if="numberOfColumns > 1">
      <slot name="column-1"></slot>
    </div>
    <div class="columns__column" v-if="numberOfColumns > 1">
      <slot name="column-2"></slot>
    </div>
    <div class="columns__column" v-if="numberOfColumns >= 3">
      <slot name="column-3"></slot>
    </div>
    <div class="columns__column" v-if="numberOfColumns >= 4">
      <slot name="column-4"></slot>
    </div>
    <div class="columns__column" v-if="numberOfColumns >= 5">
      <slot name="column-5"></slot>
    </div>
  </div>
</template>

<script setup>
import { toRaw } from "vue";
const props = defineProps(["numberOfColumns"]);
const numberOfColumns = toRaw(props.numberOfColumns);
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.columns {
  display: flex;
  column-gap: 40px;

  &__column {
    flex: 1;
  }

  @media (max-width: $screen-xs) {
    flex-direction: column;
  }
}
</style>
