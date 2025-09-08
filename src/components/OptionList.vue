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
          <Icon :icon="icons.check" class="option__icon" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const icons = computed(() => store.getters.getIcons);
const props = defineProps(["items", "optionSelected"]);
const optionSelected = ref(props.optionSelected);
const emit = defineEmits(["toSelect"]);

const toSelect = (item: number) => {
  optionSelected.value = item;
  emit("toSelect", item);
};
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;

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
