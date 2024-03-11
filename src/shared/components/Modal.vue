<template>
  <div class="overlay" ref="modal">
    <dialog class="modal" id="modal" :style="modalStyles.modalStyles">
      <div class="modal-content">
        <slot></slot>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { inject } from "vue";

const modal = inject("modalRef");

const modalStyles = defineProps(["modalStyles"]);
</script>

<style scoped lang="scss">
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
}

.modal-content {
  @include flex-layout($row-gap: 3rem);
}

@import "@/assets/scss/_responsive.scss";
</style>
