<template>
  <div class="callout">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.callout {
  margin: 10px 0;
  border-radius: 5px;
  padding: 20px;
  background-color: #f1f1f6;
}
</style>
