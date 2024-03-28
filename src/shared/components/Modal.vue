<template>
  <div class="overlay" ref="modalRef">
    <dialog class="modal">
      <slot></slot>
    </dialog>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";
import useModal from "hooks/useModal";

const props = defineProps(["provideName"]);
const modalRef = inject(props.provideName);
const { hideModal, addModaListener } = useModal();

onMounted(() => {
  hideModal(modalRef);
  addModaListener(modalRef);
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

dialog {
  all: unset;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  @include sizing(100%, 100%);
  background-color: $black-5;
  z-index: 999;
}

.modal {
  z-index: 2000;
  box-shadow: $box-shadow-1;
  background-color: $white;
  border-radius: 5px;
  animation: fadeIn 1s;
  transition: width 0.3s;
  user-select: none;
  height: max-content;
  outline: none;
  width: max-content;
  position: absolute;
  top: 50%;
  right: 0;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -60%);
  padding: 2rem 1.9rem;
}
</style>
