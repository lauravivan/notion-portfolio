<script setup lang="ts">
import type { PageInfo } from "@core/@types";

const { page } = defineProps<{ page: PageInfo }>();
</script>

<template>
  <div
    class="page-content"
    :class="{
      'page-content--banner': page.banner?.path,
      'page-content--icon': page.icon,
    }"
  >
    <slot />
    <div style="width: auto; height: 200px"></div>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  @include grid-layout();
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  width: 50%;
  row-gap: $DEFAULT_SPACING;

  &--icon {
    top: 160px;
  }
}

@media (min-width: $screen-small) {
  .page-full-width .page-content {
    padding: 0 50px;
    width: 100%;
  }
}

@media (max-width: $screen-xs) {
  .page-wrapper .page-content {
    width: 100%;
    padding: 0 20px !important;
  }
}
</style>
