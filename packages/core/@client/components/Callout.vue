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

<style lang="scss">
.callout {
  display: flex;
  column-gap: 5px;
  border-radius: 5px;
  padding: 20px;
  background-color: #f1f1f6;
}
</style>
