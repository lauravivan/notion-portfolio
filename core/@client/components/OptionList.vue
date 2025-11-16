<script setup lang="ts">
import { ref } from "vue";
import { Icon } from ".";
import { Icons } from "../../util";

const props = defineProps(["items", "optionSelected"]);
const optionSelected = ref(props.optionSelected);
const emit = defineEmits(["toSelect"]);

const toSelect = (item: number) => {
  optionSelected.value = item;
  emit("toSelect", item);
};
</script>

<template>
  <div class="option">
    <ul class="option__list">
      <li
        class="option__item"
        v-for="(item, index) of props.items"
        :key="item"
        @click="toSelect(index)"
      >
        <div>{{ item.name }}</div>
        <div
          :class="
            optionSelected == index ? 'option__active' : 'option__not-active'
          "
        >
          <Icon :icon="Icons.check" class="option__icon" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "@core/assets/scss/main";
@use "@core/assets/scss/_mixin.scss" as mixin;

.option {
  &__not-active {
    visibility: hidden;
  }

  &__icon {
    font-size: 15px;
  }

  &__list {
    @include mixin.flex-layout;
  }

  &__item {
    @include mixin.flex-layout($flex-direction: row);
    justify-content: space-between;
    align-items: center;
    @extend .hover-default;
  }
}
</style>
