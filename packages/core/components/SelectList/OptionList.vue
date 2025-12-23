<script setup lang="ts">
import { ref } from "vue";
import Icon from "@core/@client/components/Icon.vue";
import { Icons } from "@core/enum";

const props = defineProps<{
  options: [string, string][];
  optionSelected: string;
}>();
const optionSelected = ref(props.optionSelected);
const emit = defineEmits(["toSelect"]);

const toSelect = (option: string) => {
  optionSelected.value = option;
  emit("toSelect", option);
};
</script>

<template>
  <div class="option">
    <ul class="option__list">
      <li
        class="option__item"
        v-for="op of props.options"
        :key="op[0]"
        @click="toSelect(op[0])"
      >
        <div>{{ op[1] }}</div>
        <div
          :class="
            op[0] == props.optionSelected
              ? 'option__active'
              : 'option__not-active'
          "
        >
          <Icon :icon="Icons.check" class="option__icon" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
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
