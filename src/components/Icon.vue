<template>
  <div class="icon" v-if="props.icon">
    <Icon :icon="props.icon" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps(["icon"]);
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_var" as var;

.icon {
  color: var.$black-3;
  font-size: 20px;
  display: flex;
  align-items: center;
}
</style>
