<template>
  <div class="toggle-option" @click="toToggle">
    <slot></slot>
    <ToggleBtn :provideName="props.provideName" />
  </div>
</template>

<script setup>
import ToggleBtn from "components/ToggleBtn.vue";
import useToggle from "hooks/useToggle";

const props = defineProps(["provideName"]);
const { toToggle } = useToggle(props.provideName);
</script>

<style lang="scss">
@import "@/assets/scss/main";

.toggle-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: $fs-xs;
  color: $black-7;
  padding: 0.35rem;
  font-size: 0.73rem;

  &:hover {
    @extend .hover-default;
    font-size: 0.73rem;
  }
}
</style>
