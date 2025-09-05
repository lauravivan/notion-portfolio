<template>
  <div class="divider-wrapper">
    <div class="divider"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/main.scss";
@use "@/assets/scss/_var" as var;

.divider-wrapper {
  margin: var.$DEFAULT_SPACING 0;
}

.divider {
  border-bottom: 1px solid var.$gray;
}
</style>
