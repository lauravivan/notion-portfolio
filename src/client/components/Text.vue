<template>
  <span class="text">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
@use "@/core/assets/scss/main.scss";
@use "@/core/assets/scss/_var" as var;

.text {
  line-height: 1.5;
  margin: var.$DEFAULT_SPACING 0;
}
</style>
