<script setup lang="ts">
import { useModal } from "@core/hooks";
import { Breadcrumb } from "@core/@client/components";
import { Icons } from "@core/enum";
import Icon from "@core/@client/components/Icon.vue";
import type { IMetadata } from "@core/@types";
import Settings from "./Settings.vue";
import { useStore } from "@core/store";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const store = useStore;

const { getDynamicCurrentPageInfo } = storeToRefs(store);

const activePage = computed(() => getDynamicCurrentPageInfo.value || "");

const pageId = Object.keys(activePage.value)[0] || "";

const props = defineProps<{ metadata: IMetadata }>();

const HEADER_PROVIDE_NAME = "headerMenu";

const { showModal, hideModal, addModalListener } = useModal({
  provideName: HEADER_PROVIDE_NAME,
});
</script>

<template>
  <header class="header">
    <div class="header__content">
      <Breadcrumb :metadata="props.metadata" />
      <div></div>
      <button
        class="header__btn"
        id="header-btn"
        @click="showModal"
        type="button"
        aria-label="Open settings"
      >
        <Icon :icon="Icons.moreHorizontal" />
      </button>
    </div>
  </header>
  <Settings
    :addSettingsModalListener="addModalListener"
    :hideSettingsModal="hideModal"
    :menuProvider="HEADER_PROVIDE_NAME"
    :modalStyles="{ top: '77px', right: '10px' }"
    :pageId="pageId"
  />
</template>

<style lang="scss">
.header {
  background-color: $white;
  height: $HEADER_HEIGHT;

  &__content {
    display: flex;
    user-select: none;
    justify-content: space-between;
  }

  &__btn {
    @extend .button;
  }
}
</style>
