<script setup lang="ts">
const props = defineProps<{ numberOfColumns: number }>();
</script>

<template>
  <div v-if="props.numberOfColumns" class="columns">
    <div class="columns__column" v-if="props.numberOfColumns > 1">
      <slot name="column-1"></slot>
    </div>
    <div class="columns__column" v-if="props.numberOfColumns > 1">
      <slot name="column-2"></slot>
    </div>
    <div class="columns__column" v-if="props.numberOfColumns >= 3">
      <slot name="column-3"></slot>
    </div>
    <div class="columns__column" v-if="props.numberOfColumns >= 4">
      <slot name="column-4"></slot>
    </div>
    <div class="columns__column" v-if="props.numberOfColumns >= 5">
      <slot name="column-5"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.columns {
  display: flex;
  column-gap: 20px;

  &__column {
    display: flex;
    flex-direction: column;
    row-gap: $DEFAULT_SPACING;
    flex: 1;
  }

  @media (max-width: $screen-xs) {
    flex-direction: column;
  }
}
</style>
