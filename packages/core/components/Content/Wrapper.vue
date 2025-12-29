<script setup lang="ts">
import { useStore } from "@core/store";

const store = useStore;
</script>

<template>
  <main
    v-if="store.getDynamicCurrentPageInfo"
    class="page-wrapper"
    :class="[
      store.getDynamicCurrentPageInfo?.settings.fontSize,
      store.getDynamicCurrentPageInfo?.settings.fontFamily,
      store.getDynamicCurrentPageInfo?.settings.pageSize,
    ]"
  >
    <slot />
  </main>
</template>

<style lang="scss">
.page-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  margin-top: calc($HEADER_HEIGHT + $TABS_HEIGHT);
  height: calc(100vh - ($HEADER_HEIGHT + $TABS_HEIGHT));

  @media (max-width: $screen-small) {
    margin-top: $HEADER_HEIGHT;
  }
}

.font-roboto-mono {
  font-family: $mono;
}

.font-roboto-serif {
  font-family: $serif;
}

@media (min-width: $screen-small) {
  .font-size-small {
    p,
    span,
    div:not(:has(h1, h2, h3, h4)) {
      font-size: $fs-small;
    }
  }
}
</style>
