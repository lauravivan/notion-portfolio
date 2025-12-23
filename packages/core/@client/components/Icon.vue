<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Icons } from "@core/enum";

defineProps<{
  icon: Icons;
}>();
</script>

<template>
  <div class="icon" v-if="icon">
    <Icon :icon="icon" />
  </div>
</template>

<style lang="scss">
.icon {
  color: $black-3;
  font-size: 20px;
  display: flex;
  align-items: center;
}
</style>
