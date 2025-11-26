<script setup lang="ts">
import { ref } from "vue";
import { MainModalView, Icon } from ".";
import { useModal } from "../../hooks";
import { Icons } from "@core/enum";

const isClicked = ref(false);
const pageModal = ref<PageInfo>();

const props = defineProps([
  "galleryTitle",
  "cardPreviewIsCover",
  "component",
  "pages",
]);

const { showModal, hideModal, addModalListener } = useModal({
  provideName: "pageModal",
});

function showPageModal(page: PageInfo) {
  pageModal.value = page;
  isClicked.value = true;
  setTimeout(() => {
    showModal();
  }, 250);
}
</script>

<template>
  <div class="gallery">
    <div class="gallery__navbar">
      <ul class="gallery__menu">
        <li class="gallery__menu-item">
          <Icon :icon="Icons.gridView" />
          <span>Gallery</span>
        </li>
        <li class="gallery__menu-item">
          <button>Filter</button>
          <button>Sort</button>
        </li>
      </ul>

      <div>
        <h3 class="gallery__title">{{ props.galleryTitle }}</h3>
      </div>
    </div>

    <div class="gallery__cards-wrapper">
      <div
        class="gallery__card-wrapper"
        v-for="page in pages"
        :key="page.id"
        @click.stop="showPageModal(page)"
      >
        <div
          class="gallery__card-content"
          :style="!props.cardPreviewIsCover ? { padding: '15px 13px 0px' } : ''"
        >
          <component
            class="gallery__card-content--content"
            v-if="!props.cardPreviewIsCover"
            :is="props.component"
            :page="page"
            :hideDatabase="true"
          />
          <div v-else class="gallery__card-content--banner">
            <img :src="page.bannerPath" />
          </div>
        </div>
        <div class="gallery__card-footer">
          <img class="gallery__page-icon" :src="page.iconPath" />
          <div>{{ page.name }}</div>
        </div>
      </div>
    </div>
  </div>
  <MainModalView
    provideName="pageModal"
    :component="props.component"
    :page="pageModal"
    :hideModal="hideModal"
    :addModalListener="addModalListener"
    v-if="isClicked"
  />
</template>

<style lang="scss">
@use "@core/assets/scss/main.scss";
@use "@core/assets/scss/_mixin.scss" as mixin;
@use "@core/assets/scss/_var" as var;

.gallery {
  overflow-x: auto;

  &:hover {
    .gallery__menu-item:nth-child(2) {
      visibility: visible;
    }
  }

  &__navbar {
    @include mixin.flex-layout($row-gap: 15px);
    margin-bottom: 30px;
  }

  &__menu {
    @include mixin.flex-layout($flex-direction: row);
    justify-content: space-between;
    border-bottom: 1px solid var.$black-2;
  }

  &__menu-item:nth-child(1) {
    @include mixin.flex-layout($flex-direction: row, $column-gap: 3px);
    align-items: center;
    font-weight: var.$fw-700;
    border-bottom: 2px solid var.$black;
    padding-bottom: 15px;
  }

  &__menu-item:nth-child(2) {
    @include mixin.flex-layout($flex-direction: row, $column-gap: 10px);
    visibility: hidden;

    button {
      all: unset;
      color: var.$black-8;
      cursor: pointer;
      box-sizing: border-box;
      padding: 7px 5px;
      margin-bottom: 5px;

      &:hover {
        border-radius: 10%;
        background-color: var.$gray-4;
      }
    }
  }

  &__title {
    font-weight: var.$fw-700;
    font-size: var.$fs-large;
  }

  &__cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 10px;
  }

  &__card-wrapper {
    border: 1px solid var.$black-1;
    border-radius: 5px;
    box-shadow: var.$box-shadow-2;
    cursor: pointer;
    font-size: var.$fs-small;
    color: var.$black-6;

    &:hover {
      background-color: var.$gray-2;
    }
  }

  &__card-content {
    @include mixin.flex-layout($row-gap: 15px);
    background-color: var.$gray-2;
    height: 160px;
    overflow: hidden;

    &--banner {
      height: 100%;

      > img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }

  &__card-footer {
    padding: 10px;
    @include mixin.flex-layout($flex-direction: row, $column-gap: 8px);
    align-items: center;
    font-weight: var.$fw-900;
  }

  &__page-icon {
    width: 20px;
  }
}
</style>
