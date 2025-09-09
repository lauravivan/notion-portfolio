<template>
  <div class="overlay" ref="modalRef">
    <dialog
      class="modal"
      :class="props.isStatic ? 'modal-static' : 'modal-dynamic'"
      :style="props.modalStyles"
    >
      <slot></slot>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue";

const props = defineProps([
  "hideModal",
  "addModalListener",
  "modalStyles",
  "provideName",
  "isStatic",
]);

const modalRef = inject(props.provideName);

onMounted(() => {
  props.hideModal();
  props.addModalListener();
});
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;
@use "@/assets/scss/_var" as var;

dialog {
  all: unset;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include mixin.sizing(100%, 100%);
  background-color: var.$black-5;
  z-index: 999;
}

.modal-static {
  z-index: 2000;
  box-shadow: var.$box-shadow-1;
  border-radius: 5px;
  background-color: var.$white;
  animation: fadeIn 1s;
  transition: width 0.3s;
  user-select: none;
  outline: none;
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 1.9rem;
  overflow-y: auto;
  @extend .webkit;
}

.modal-dynamic {
  position: absolute;
  z-index: 2500;
  min-width: 200px;
  padding: 6px;
  box-shadow: var.$box-shadow-3;
  background-color: var.$white;
  border-radius: 6px;
  outline: none;
  animation: fadeIn 0.4s ease-in-out;
  animation-fill-mode: forwards;
  left: unset;
  transform: unset;
  width: auto;
}
</style>
