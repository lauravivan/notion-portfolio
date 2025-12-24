<script setup lang="ts">
import { Modal } from ".";
import Icon from "@core/@client/components/Icon.vue";
import type { PageInfo } from "@core/@types";
import { Icons } from "@core/enum";
import type { Component } from "vue";

const props = defineProps<{
  hideModal: () => void;
  addModalListener: () => void;
  provideName: string;
  page: PageInfo;
  component: Component;
}>();
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
          v-if="props.page.banner"
          class="page-banner"
          :style="{
            height: 'max-content',
            margin: '0px !important',
            'margin-top': '20px !important',
          }"
        >
          <img :src="props.page.banner.path" />
        </div>
        <div
          class="page-content"
          :class="props.page.banner ? 'page-content--banner' : ''"
          :style="props.page.banner ? { top: '150px' } : ''"
        >
          <div class="page-title">
            <img v-if="props.page.icon" :src="props.page.icon.path" />
            <span>{{ props.page.title }}</span>
          </div>
          <component :is="props.component" :page="props.page" />
          <div style="width: auto; height: 100px"></div>
        </div>
      </main>
    </Modal>
  </Teleport>
</template>

<style lang="scss">
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
