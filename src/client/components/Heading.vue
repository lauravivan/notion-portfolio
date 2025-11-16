<script setup lang="ts">
const props = defineProps(["headingNumber"]);
</script>

<template>
  <h1 class="h1 heading" v-if="props.headingNumber == 1"><slot></slot></h1>
  <h2 class="h2 heading" v-if="props.headingNumber == 2"><slot></slot></h2>
  <h3 class="h3 heading" v-if="props.headingNumber == 3"><slot></slot></h3>
  <h4 class="h4 heading" v-if="props.headingNumber == 4"><slot></slot></h4>
  <h5 class="h5 heading" v-if="props.headingNumber == 5"><slot></slot></h5>
  <h6 class="h6 heading" v-if="props.headingNumber == 6"><slot></slot></h6>
</template>

<style scoped lang="scss">
@use "@/core/assets/scss/main.scss";
@use "@/core/assets/scss/_var" as var;

.heading {
  font-weight: var.$fw-800;
  margin: var.$DEFAULT_SPACING 0;
}

.h1 {
  font-size: var.$fs-xl + 0.4rem;
}

.h2 {
  font-size: var.$fs-xl + 0.2rem;
}

.h3 {
  font-size: var.$fs-xl;
}

.h4 {
  font-size: var.$fs-xl - 0.2rem;
}

.h5 {
  font-size: var.$fs-xl - 0.4rem;
}

.h6 {
  font-size: var.$fs-xl - 0.6rem;
}
</style>
