<script setup lang="ts">
import router from "@/core/router";
import { RouteLocationNormalized } from "vue-router";
let previousRoute: RouteLocationNormalized | null = null;

router.beforeEach((_to, from, next) => {
  previousRoute = from;
  next();
});

function getPreviousRoute() {
  return previousRoute?.fullPath;
}
</script>

<template>
  <div class="not-found">
    <div>
      <div>
        <p>This content does not exist</p>
        <div class="not-found__btn">
          <router-link :to="getPreviousRoute()!"
            >Back to my content</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/core/assets/scss/main";
@use "@/core/assets/scss/_mixin.scss" as mixin;
@use "@/core/assets/scss/_var" as var;

.not-found {
  position: relative;
  @include mixin.sizing(100%, 100vh);

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    > div {
      @include mixin.flex-layout($row-gap: 15px);
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    a {
      all: unset;
      display: block;
      width: max-content;
      background-color: var.$active;
      color: var.$white !important;
      padding: 0.5rem;
      border-radius: 3px;

      &:hover {
        color: var.$white !important;
      }
    }
  }
}
</style>
