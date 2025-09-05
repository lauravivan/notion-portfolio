<template>
  <span class="text">
    <slot></slot>
  </span>
</template>

<script></script>

<style scoped lang="scss">
@use "@/assets/scss/main.scss";
@use "@/assets/scss/_var" as var;

.text {
  line-height: 1.5;
  margin: var.$DEFAULT_SPACING 0;
}
</style>
