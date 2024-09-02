<template>
  <div class="menu-overlay" ref="menuRef">
    <div class="menu" :style="props.menuStyles">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";
import useModal from "hooks/useModal";

const props = defineProps(["provideName", "menuStyles"]);
const menuRef = inject(props.provideName);
const { hideModal, addModaListener } = useModal();

onMounted(() => {
  hideModal(menuRef);
  addModaListener(menuRef);
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include sizing(100%, 100%);
  z-index: 2000;
}

.menu {
  position: absolute;
  z-index: 2500;
  min-width: 200px;
  background-color: $white;
  padding: 6px;
  box-shadow: $box-shadow-3;
  border-radius: 6px;
  outline: none;
  animation: fadeIn 0.4s ease-in-out;
  animation-fill-mode: forwards;
}
</style>
