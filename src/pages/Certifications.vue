<script setup lang="ts"></script>

<template>
  <div class="certifications">My certifications will show up here.</div>
</template>

<style lang="scss">
@use "@/assets/scss/_var.scss" as var;

.certifications {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__img-wrapper {
    height: 110px;
    width: 110px;
    flex: 1;

    @media (max-width: var.$screen-small) {
      flex: none;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .columns {
    &__column:first-of-type {
      display: flex;
      flex: none;
    }

    &__column:nth-child(2) {
      flex: none;
    }
  }
}
</style>
