<script setup lang="ts">
const props = defineProps<{ src: string }>();
</script>

<template>
  <div class="img-wrapper">
    <img :src="props.src" />
  </div>
</template>

<style lang="scss">
.img-wrapper {
  display: flex;
  justify-content: center;
  max-width: 100%;

  img {
    width: 100%;
  }
}

@media (min-width: $screen-medium) {
  .page-full-width {
    .img-wrapper {
      justify-content: flex-start;
      max-width: 43%;
    }
  }
}

.page-full-width .img-wrapper,
.img-wrapper {
  @media (max-width: $screen-xs) {
    max-width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
