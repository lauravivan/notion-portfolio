<template>
  <div>
    <div class="select-btn" @click="showModal">
      <button>{{ props.options[optionSelected].name }}</button>
      <Icon :icon="icons.arrowDown" />
    </div>

    <Modal
      :provideName="props.menuProvideName"
      class="select-btn-menu"
      :modalStyles="{ top: '10px', right: '110px' }"
      :hideModal="hideModal"
      :addModalListener="addModalListener"
    >
      <div class="theme-options">
        <OptionList
          :items="props.options"
          @toSelect="optionClicked"
          :optionSelected="optionSelected"
        ></OptionList>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import OptionList from "@/components/OptionList.vue";
import Icon from "@/components/Icon.vue";
import { ref } from "vue";
import useModal from "@/hooks/useModal";
import { computed } from "vue";
import { useStore } from "vuex";
import Modal from "./Modal.vue";

const store = useStore();
const icons = computed(() => store.getters.getIcons);

const props = defineProps(["options", "menuProvideName", "optionSelected"]);

const optionSelected = ref(props.optionSelected);
const emit = defineEmits(["toSelect"]);

const { showModal, hideModal, addModalListener } = useModal({
  provideName: props.menuProvideName,
});

function optionClicked(option: string) {
  optionSelected.value = option;
  emit("toSelect", option);
  hideModal();
}
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;
@use "@/assets/scss/_var" as var;

.select-btn {
  @include mixin.flex-layout($flex-direction: row);
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: var.$gray-4;
    border-radius: 5px;
  }

  > button {
    border: none;
    background-color: transparent;
    font-family: var.$default;
    font-size: var.$fs-small;
    padding: 0;
    cursor: pointer;
  }
}

.select-btn-menu {
  .menu {
    min-width: 280px !important;

    @media (max-width: var.$screen-small) {
      min-width: 150px !important;
    }
  }
}
</style>
