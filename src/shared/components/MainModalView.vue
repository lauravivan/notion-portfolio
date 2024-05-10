<template>
  <Teleport to="body">
    <Modal
      class="page-modal"
      :provideName="props.provideName"
      v-if="getGlobalProperties.activePageModal"
    >
      <router-link :to="getGlobalProperties.activePageModal.pagePath">
        <Icon class="page-modal__expand" :icon="icons.expand" />
      </router-link>
      <main
        class="page-wrapper"
        :class="[
          getGlobalProperties.activePageModal.pageSettings.fontStyle,
          getGlobalProperties.activePageModal.pageSettings.fontSize,
        ]"
      >
        <div
          v-if="getGlobalProperties.activePageModal.pageBanner"
          class="page-banner"
          :style="{
            height: 'max-content',
            margin: '0px !important',
            'margin-top': '20px !important',
          }"
        >
          <img :src="getGlobalProperties.activePageModal.pageBanner" />
        </div>
        <div
          class="page-content"
          :class="
            getGlobalProperties.activePageModal.pageBanner
              ? 'page-content--banner'
              : ''
          "
          :style="
            getGlobalProperties.activePageModal.pageBanner
              ? { top: '150px' }
              : ''
          "
        >
          <div class="page-title">
            <img :src="getGlobalProperties.activePageModal.pageIcon" />
            <span>{{ getGlobalProperties.activePageModal.pageName }}</span>
          </div>
          <component
            :is="props.component"
            :page="getGlobalProperties.activePageModal"
          />
          <div style="width: auto; height: 100px"></div>
        </div>
      </main>
    </Modal>
  </Teleport>
</template>

<script setup>
import Modal from "components/Modal.vue";
import Icon from "UIElements/Icon.vue";
import { icons, getGlobalProperties } from "global";

const props = defineProps(["component", "provideName"]);
</script>

<style lang="scss">
@import "@/assets/scss/main";

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

      @media (max-width: $screen-xs) {
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
