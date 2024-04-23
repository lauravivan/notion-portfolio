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
        <div v-if="props.pageClicked.pageBanner" class="page-banner">
          <img :src="props.pageClicked.pageBanner" />
        </div>
        <div
          class="page-content"
          :class="props.pageClicked.pageBanner ? 'page-content--banner' : ''"
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
  .modal {
    overflow-y: hidden;
  }

  .page-wrapper {
    height: 80vh;
  }

  &__expand {
    @extend .button;
  }
}
</style>
