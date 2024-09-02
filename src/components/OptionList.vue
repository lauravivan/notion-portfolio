<template>
  <div class="option">
    <ul class="option__list">
      <li
        class="option__item"
        v-for="(item, index) in props.items"
        :key="index"
        @click="toSelect(index)"
      >
        <div>{{ item }}</div>
        <div
          :class="
            optionSelected == index ? 'option__active' : 'option__not-active'
          "
        >
          <Icon :icon="icons.check" class="option__icon" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Icon from "components/Icon.vue";
import { ref } from "vue";
import { icons } from "global";

const props = defineProps(["items", "optionSelected"]);
const optionSelected = ref(props.optionSelected);
const emit = defineEmits(["toSelect"]);

const toSelect = (index) => {
  optionSelected.value = index;

  emit("toSelect", index);
};
</script>

<style lang="scss">
@import "@/assets/scss/main";

.option {
  &__not-active {
    visibility: hidden;
  }

  &__icon {
    font-size: 15px;
  }

  &__list {
    @include flex-layout;
  }

  &__item {
    @include flex-layout($flex-direction: row);
    justify-content: space-between;
    align-items: center;
    @extend .hover-default;
  }
}
</style>
