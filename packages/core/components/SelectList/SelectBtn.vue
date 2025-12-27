<script setup lang="ts">
import { Modal } from "@core/@client/components";
import OptionList from "./OptionList.vue";
import { ref } from "vue";
import Icon from "@core/@client/components/Icon.vue";
import { useModal } from "@core/hooks";
import { Icons } from "@core/enum";

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
.select-btn {
  @include flex-layout($flex-direction: row);
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: $gray-4;
    border-radius: 5px;
  }

  > button {
    border: none;
    background-color: transparent;
    font-family: $default;
    font-size: $fs-small;
    padding: 0;
    cursor: pointer;
    color: $black-6;
  }
}

.select-btn-menu {
  .menu {
    min-width: 280px !important;

    @media (max-width: $screen-small) {
      min-width: 150px !important;
    }
  }
}
</style>
