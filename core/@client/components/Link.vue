<script setup lang="ts">
import { Icon } from ".";
import { Icons } from "@core/enum";

const props = defineProps(["href", "emoji"]);
</script>

<template>
  <a class="link" target="_blank" :href="props.href">
    <div>
      {{ props.emoji }} <Icon class="link__arrow" :icon="Icons.arrowLink" />
    </div>
    <span><slot></slot></span>
  </a>
</template>

<style lang="scss">
@use "@core/assets/scss/_var.scss" as var;

.link {
  all: unset;
  display: flex;
  padding: 10px 2px;
  cursor: pointer;
  color: var.$dark !important;
  column-gap: 5px;

  &:hover {
    background-color: var.$gray-4;
    border-radius: 5px;
  }

  span {
    font-weight: var.$fw-600;
    border-bottom: 1px solid var.$black-2;
    padding-bottom: 2px;
  }

  > div:first-of-type {
    position: relative;
    z-index: 10;
  }

  &__arrow {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 100;
    color: var.$dark;
  }
}
</style>
