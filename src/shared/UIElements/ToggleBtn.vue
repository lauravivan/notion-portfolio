<template>
  <div
    class="toggle-btn"
    ref="toggleBtnRef"
    @click="toggleCheck"
    :class="toggleBtnClasses"
  >
    <div class="toggle-btn__check" ref="check"></div>
    <div class="toggle-btn__uncheck" ref="uncheck"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref, computed } from "vue";
import useVisible from "hooks/useVisible";

const check = ref(null);
const uncheck = ref(null);
const { setVisibilityToNone, setVisibilityToBlock } = useVisible();
const BG_BLUE = "rgb(35, 131, 226)";
const BG_GRAY = "rgba(0, 0, 0, 0.15)";
const props = defineProps(["provideName", "isActive"]);
const toggleBtnRef = inject(props.provideName);
const isChecked = ref(props.isActive);

function setToggleBg(color) {
  if (toggleBtnRef.value) {
    toggleBtnRef.value.style.backgroundColor = color;
  }
}

function toggleCheck() {
  const uncheckVisiblity = uncheck.value.style.visibility;

  if (uncheckVisiblity === "visible") {
    setVisibilityToNone(uncheck);
    setVisibilityToBlock(check);
    setToggleBg(BG_GRAY);
    isChecked.value = false;
  } else {
    setVisibilityToNone(check);
    setVisibilityToBlock(uncheck);
    setToggleBg(BG_BLUE);
    isChecked.value = true;
  }
}

const toggleBtnClasses = computed(() => {
  return {
    checked: isChecked.value,
    unchecked: !isChecked.value,
  };
});

onMounted(() => {
  setTimeout(() => {
    if (props.isActive) {
      setVisibilityToNone(check);
      setVisibilityToBlock(uncheck);
      setToggleBg(BG_BLUE);
      isChecked.value = true;
    } else {
      setVisibilityToBlock(check);
      setVisibilityToNone(uncheck);
      setToggleBg(BG_GRAY);
      isChecked.value = false;
    }
  }, 1000);
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

$TOGGLE-BTN-WIDTH: 30px;
$TOGGLE-BTN-HEIGHT: 18px;

.toggle-btn {
  display: flex;
  @include sizing($TOGGLE-BTN-WIDTH, $TOGGLE-BTN-HEIGHT);
  border-radius: 34px;
  padding: 2px;
  cursor: pointer;

  &__check,
  &__uncheck {
    border-radius: 50%;
    background-color: $white;

    @include sizing(
      calc($TOGGLE-BTN-WIDTH / 2),
      calc($TOGGLE-BTN-HEIGHT - 4px)
    );
  }
}
</style>
