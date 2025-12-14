<script setup lang="ts">
import { Modal, Icon } from ".";
import { Icons } from "@core/enum";

const props = defineProps([
  "component",
  "provideName",
  "page",
  "hideModal",
  "addModalListener",
]);
</script>

<template>
  <Teleport to="body">
    <Modal
      class="page-modal"
      :provideName="props.provideName"
      :isStatic="true"
      :hideModal="props.hideModal"
      :addModalListener="props.addModalListener"
    >
      <router-link :to="props.page.path">
        <Icon class="page-modal__expand" :icon="Icons.expand" />
      </router-link>
      <main class="page-wrapper">
        <div
          v-if="props.page.bannerPath"
          class="page-banner"
          :style="{
            height: 'max-content',
            margin: '0px !important',
            'margin-top': '20px !important',
          }"
        >
          <img :src="props.page.bannerPath" />
        </div>
        <div
          class="page-content"
          :class="props.page.bannerPath ? 'page-content--banner' : ''"
          :style="props.page.bannerPath ? { top: '150px' } : ''"
        >
          <div class="page-title">
            <img :src="props.page.iconPath" />
            <span>{{ props.page.name }}</span>
          </div>
          <component :is="props.component" :page="props.page" />
          <div style="width: auto; height: 100px"></div>
        </div>
      </main>
    </Modal>
  </Teleport>
</template>

<style lang="scss">
@use "@core/assets/scss/main";
@use "@core/assets/scss/_var" as var;

.page-modal {
  .modal,
  .page-wrapper {
    height: 80vh !important;
  }

  .modal {
    overflow-y: hidden;
  }

  .page-wrapper {
    margin-top: 0 !important;

    .page-banner {
      margin: 5px;
    }

    .page-content {
      top: 100px;
      width: 100%;
      left: 60%;
      padding-right: 15% !important;
      transform: translate(-50%, 0%);

      @media (max-width: var.$screen-xs) {
        left: 0%;
        padding-left: 50% !important;
      }
    }
  }

  &__expand {
    @extend .button;
  }
}
</style>
