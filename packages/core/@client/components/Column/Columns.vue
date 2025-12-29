<script setup lang="ts">
import { onMounted, ref } from "vue";

type colSize = 10 | 20 | 30 | 40 | 60 | 80 | 90;

const props = defineProps<{
  numberOfColumns: 2 | 3 | 4 | 5;
  col1Size?: colSize;
  col2Size?: colSize;
  col3Size?: colSize;
  col4Size?: colSize;
  col5Size?: colSize;
}>();

const columnsRef = ref();

onMounted(() => {
  if (columnsRef.value) {
    if (props.numberOfColumns === 2) {
      if (props.col1Size && props.col2Size) {
        columnsRef.value.style.gridTemplateColumns = `${props.col1Size}% ${props.col2Size}%`;
      } else {
        columnsRef.value.style.gridTemplateColumns = `repeat(2, 1fr)`;
      }
    }

    if (props.numberOfColumns === 3) {
      if (props.col1Size && props.col2Size && props.col3Size) {
        columnsRef.value.style.gridTemplateColumns = `${props.col1Size}% ${props.col2Size}% ${props.col3Size}%`;
      } else {
        columnsRef.value.style.gridTemplateColumns = `repeat(3, 1fr)`;
      }
    }

    if (props.numberOfColumns === 4) {
      if (
        props.col1Size &&
        props.col2Size &&
        props.col3Size &&
        props.col4Size
      ) {
        columnsRef.value.style.gridTemplateColumns = `${props.col1Size}% ${props.col2Size}% ${props.col3Size}% ${props.col4Size}%`;
      } else {
        columnsRef.value.style.gridTemplateColumns = `repeat(4, 1fr)`;
      }
    }

    if (props.numberOfColumns === 5) {
      if (
        props.col1Size &&
        props.col2Size &&
        props.col3Size &&
        props.col3Size &&
        props.col4Size &&
        props.col5Size
      ) {
        columnsRef.value.style.gridTemplateColumns = `${props.col1Size}% ${props.col2Size}% ${props.col3Size}% ${props.col4Size}% ${props.col5Size}%`;
      } else {
        columnsRef.value.style.gridTemplateColumns = `repeat(5, 1fr)`;
      }
    }
  }
});
</script>

<template>
  <div v-if="props.numberOfColumns" class="columns" ref="columnsRef">
    <slot />
  </div>
</template>

<style lang="scss">
.columns {
  display: grid;
  column-gap: 20px;
  row-gap: $DEFAULT_SPACING;

  @media (max-width: 480px) {
    grid-template-columns: 1fr !important;
  }
}
</style>
