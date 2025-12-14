<script setup lang="ts">
const props = defineProps(["title", "subtitle", "link"]);
</script>

<template>
  <div class="bookmark">
    <a target="_blank" :href="props.link"
      ><div class="bookmark__left">
        <span class="bookmark__left__title">{{ props.title }}</span>
        <span class="bookmark__left__subtitle">{{ props.subtitle }}</span>
      </div>
      <div></div
    ></a>
  </div>
</template>

<style lang="scss">
@use "@core/assets/scss/main";
@use "@core/assets/scss/_var.scss" as var;

a {
  all: unset;
}

.bookmark {
  padding: 20px;
  border: 1px solid var.$black-2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var.$gray-4;
  }

  a {
    all: unset;
  }

  &__left {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &__title {
      font-weight: var.$fw-300;
    }
  }
}
</style>
