<script setup lang="ts">
import { inject, onMounted, type Ref } from "vue";

const props = defineProps<{
  hideModal: () => void;
  addModalListener: () => void;
  provideName: string;
  isStatic?: boolean;
  modalStyles?: {};
}>();

const modalRef = inject<Ref<HTMLDivElement>>(props.provideName);

defineExpose({
  ref: modalRef,
});

onMounted(() => {
  props.hideModal();
  props.addModalListener();
});
</script>

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

<style lang="scss">
dialog {
  all: unset;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include sizing(100%, 100%);
  background-color: $black-5;
  z-index: 999;
}

.modal-static {
  z-index: 2000;
  box-shadow: $box-shadow-1;
  border-radius: 5px;
  background-color: $white;
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
  box-shadow: $box-shadow-3;
  background-color: $white;
  border-radius: 6px;
  outline: none;
  animation: fadeIn 0.4s ease-in-out;
  animation-fill-mode: forwards;
  left: unset;
  transform: unset;
  width: auto;
}
</style>
