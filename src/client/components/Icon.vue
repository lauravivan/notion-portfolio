<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps(["icon"]);
</script>

<template>
  <div class="icon" v-if="props.icon">
    <Icon :icon="props.icon" />
  </div>
</template>

<style lang="scss">
@use "@/core/assets/scss/main";
@use "@/core/assets/scss/_var" as var;

.icon {
  color: var.$black-3;
  font-size: 20px;
  display: flex;
  align-items: center;
}
</style>
