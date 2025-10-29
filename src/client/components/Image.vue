<script setup lang="ts">
const props = defineProps(["src"]);
</script>

<template>
  <div class="img-wrapper">
    <img :src="props.src" />
  </div>
</template>

<style lang="scss">
@use "@/core/assets/scss/main";
@use "@/core/assets/scss/_var.scss" as var;

.img-wrapper {
  display: flex;
  justify-content: center;
  max-width: 100%;

  img {
    width: 100%;
  }
}

.page-full-width {
  .img-wrapper {
    justify-content: start;

    img {
      width: 50%;
    }
  }
}

.page-full-width .img-wrapper,
.img-wrapper {
  @media (max-width: var.$screen-xs) {
    display: flex;
    justify-content: center;
    max-width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
