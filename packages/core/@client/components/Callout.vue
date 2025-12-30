<script setup lang="ts">
const props = defineProps<{ emoji?: string }>();
</script>

<template>
  <div class="callout">
    {{ props.emoji }}
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.callout {
  display: flex;
  column-gap: 5px;
  align-items: center;

  border-radius: 5px;

  line-height: 1.4;

  padding: 20px;

  background-color: #f1f1f6;
}
</style>
