<template>
  <div class="toggle" @click="props.toToggle">
    <slot></slot>
    <div
      class="toggle-btn"
      :class="props.active ? 'toggle-btn--active' : ''"
      @click.stop.prevent="props.toToggle"
      :ref="props.toggleRef"
    >
      <div class="toggle-btn__circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["active", "toToggle", "toggleRef"]);
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;
@use "@/assets/scss/_var" as var;

$TOGGLE-BTN-WIDTH: 30px;
$TOGGLE-BTN-HEIGHT: 18px;

@keyframes toggleBtn {
  0% {
    transform: rotate(0deg);
    left: 0;
  }

  50% {
    transform: rotate(20deg);
    left: 50;
  }

  100% {
    transform: rotate(50deg);
    left: 100;
  }
}

.toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var.$fs-xs;
  color: var.$black-7;
  padding: 0.35rem;
  font-size: 0.73rem;

  &:hover {
    @extend .hover-default;
    font-size: 0.73rem;
  }
}

.toggle-btn {
  @include mixin.sizing($TOGGLE-BTN-WIDTH, $TOGGLE-BTN-HEIGHT);
  border-radius: 34px;
  padding: 2px;
  cursor: pointer;
  background-color: var.$gray-stroke;
  position: relative;

  &__circle {
    border-radius: 50%;
    background-color: var.$white;
    position: absolute;
    left: 2px;
    transition: left 0.3s ease-in-out;

    @include mixin.sizing(
      calc($TOGGLE-BTN-WIDTH / 2),
      calc($TOGGLE-BTN-HEIGHT - 4px)
    );
  }

  &--active {
    background-color: var.$active;

    .toggle-btn__circle {
      left: calc(($TOGGLE-BTN-WIDTH / 2) - 2px);
    }
  }
}
</style>
