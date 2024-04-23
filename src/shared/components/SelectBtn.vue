<template>
  <div>
    <div class="select-btn" @click="showMenuModal">
      <button>{{ props.options[optionSelected] }}</button>
      <Icon :icon="icons.arrowDown" />
    </div>

    <Menu
      :provideName="props.menuProvideName"
      class="select-btn-menu"
      :menuStyles="{ top: '10px', right: '110px' }"
    >
      <div class="theme-options">
        <OptionList
          :items="props.options"
          @toSelect="optionClicked"
          :optionSelected="optionSelected"
        ></OptionList>
      </div>
    </Menu>
  </div>
</template>

<script setup>
import Menu from "components/Menu.vue";
import OptionList from "components/OptionList.vue";
import Icon from "UIElements/Icon.vue";
import { provide, ref } from "vue";
import useModal from "hooks/useModal";
import { icons } from "global";

const props = defineProps(["options", "menuProvideName", "optionSelected"]);
const { showModal } = useModal();
const menuRef = ref(null);
const optionSelected = ref(props.optionSelected);
const emit = defineEmits(["toSelect"]);

provide(props.menuProvideName, menuRef);

function optionClicked(index) {
  optionSelected.value = index;

  emit("toSelect", index);
}

function showMenuModal() {
  showModal(menuRef);
}
</script>

<style lang="scss">
@import "@/assets/scss/main";

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
