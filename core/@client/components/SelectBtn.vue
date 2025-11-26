<script setup lang="ts">
import { OptionList, Modal, Icon } from ".";
import { ref } from "vue";
import { useModal } from "../../hooks";
import { Icons } from "../../util";

const props = defineProps<{
  options: [string, string][];
  menuProvideName: string;
  optionSelected: string;
}>();

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

<template>
  <div>
    <div class="select-btn" @click="showModal">
      <button>{{ props.optionSelected }}</button>
      <Icon :icon="Icons.arrowDown" />
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
          :options="props.options"
          @toSelect="optionClicked"
          :optionSelected="optionSelected"
        ></OptionList>
      </div>
    </Modal>
  </div>
</template>

<style lang="scss">
@use "@core/assets/scss/main";
@use "@core/assets/scss/_mixin.scss" as mixin;
@use "@core/assets/scss/_var" as var;

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
