<template>
  <div class="toggle-btn" @click.stop.prevent="toToggle" ref="toggleRef">
    <div class="toggle-btn__circle"></div>
  </div>
</template>

<script setup>
import useToggle from "hooks/useToggle";

const props = defineProps(["provideName"]);
const { toToggle, toggleRef } = useToggle(props.provideName);
</script>

<style lang="scss">
@import "@/assets/scss/main";

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

.toggle-btn {
  @include sizing($TOGGLE-BTN-WIDTH, $TOGGLE-BTN-HEIGHT);
  border-radius: 34px;
  padding: 2px;
  cursor: pointer;
  background-color: $gray-stroke;
  position: relative;

  &__circle {
    border-radius: 50%;
    background-color: $white;
    position: absolute;
    left: 2px;
    transition: left 0.3s ease-in-out;

    @include sizing(
      calc($TOGGLE-BTN-WIDTH / 2),
      calc($TOGGLE-BTN-HEIGHT - 4px)
    );
  }

  &--active {
    background-color: $active;

    .toggle-btn__circle {
      left: calc(($TOGGLE-BTN-WIDTH / 2) - 2px);
    }
  }
}
</style>
