<template>
  <Teleport to="body">
    <Modal
      class="page-modal"
      :provideName="props.provideName"
      v-if="props.pageClicked"
    >
      <a :href="props.pageClicked.pagePath"
        ><Icon class="page-modal__expand" :icon="icons.expand"
      /></a>
      <main
        class="page-wrapper"
        :class="[globalFontSize, globalFontStyle, globalPageWidth]"
      >
        <div
          v-if="props.pageClicked.pageBanner"
          class="page-banner"
          :style="{
            height: 'max-content',
            margin: '0px !important',
            'margin-top': '20px !important',
          }"
        >
          <img :src="props.pageClicked.pageBanner" />
        </div>
        <div
          class="page-content"
          :class="props.pageClicked.pageBanner ? 'page-content--banner' : ''"
          :style="props.pageClicked.pageBanner ? { top: '40px' } : ''"
        >
          <div class="page-title">
            <img :src="props.pageClicked.pageIcon" />
            <span>{{ props.pageClicked.pageName }}</span>
          </div>
          <component :is="props.component" :page="props.pageClicked" />
          <div style="width: auto; height: 100px"></div>
        </div>
      </main>
    </Modal>
  </Teleport>
</template>

<script setup>
import { globalFontSize, globalFontStyle, globalPageWidth } from "global";
import Modal from "components/Modal.vue";
import Icon from "UIElements/Icon.vue";
import { icons } from "global";

const props = defineProps(["component", "provideName", "pageClicked"]);
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
      transform: translate(-50%, 0%);
    }
  }

  &__expand {
    @extend .button;
  }
}
</style>
