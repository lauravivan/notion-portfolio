<script setup lang="ts">
import Icon from "@core/@client/components/Icon.vue";
import type { PageInfo } from "@core/@types";
import { Icons } from "@core/enum";

const props = defineProps<{
  href?: string;
  emoji: string;
  page?: PageInfo;
}>();
</script>

<template>
  <router-link class="link" :to="props.page.path" v-if="props.page">
    <div>
      <img v-if="props.page.icon" :src="props.page.icon.path" />
      <template v-else> {{ props.emoji }}</template>
      <Icon class="link__arrow" :icon="Icons.arrowLink" />
    </div>
    <span><slot></slot></span
  ></router-link>
  <a class="link" target="_blank" :href="props.href" v-else>
    <div>
      {{ props.emoji }}
      <Icon class="link__arrow" :icon="Icons.arrowLink" />
    </div>
    <span><slot></slot></span>
  </a>
</template>

<style lang="scss">
.link {
  all: unset;
  display: flex;
  padding: 10px 2px;
  cursor: pointer;
  color: $dark !important;
  column-gap: 5px;

  &:hover {
    background-color: $gray-4;
    border-radius: 5px;
  }

  span {
    font-weight: $fw-600;
    border-bottom: 1px solid $black-2;
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
    color: $dark;
  }

  img {
    width: 20px;
    height: auto;
    object-fit: contain;
  }
}
</style>
