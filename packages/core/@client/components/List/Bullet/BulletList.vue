<script setup lang="ts">
import BulletItem from "./BulletItem.vue";

const props = defineProps<{ items?: string[] }>();
</script>

<template>
  <ul class="bullet-list">
    <template v-if="props.items && props.items.length > 0"
      ><BulletItem
        v-for="(item, index) in props.items"
        :key="`${item}-${index}`"
        >{{ item }}</BulletItem
      ></template
    >
    <template v-else><slot /></template>
  </ul>
</template>

<style lang="scss">
.bullet-list {
  width: 100%;
}
</style>
