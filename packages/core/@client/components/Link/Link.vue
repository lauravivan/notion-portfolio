<script setup lang="ts">
const props = defineProps<{ href: string }>();
</script>

<template>
  <a class="link" target="_blank" :href="props.href"><slot /></a>
</template>

<style lang="scss">
.link {
  all: unset;

  color: $latte-overlay0 !important;
  text-decoration: underline;
  font-weight: $fw-700;
  cursor: pointer;
}
</style>
