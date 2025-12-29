<script setup lang="ts">
import { ref } from "vue";
import { MainModalView } from "..";
import Icon from "@core/@client/components/Icon.vue";
import { useModal } from "../../../hooks";
import { Icons } from "@core/enum";
import type { PageInfo } from "@core/@types";
import { type Component } from "vue";

const isClicked = ref(false);
const pageModal = ref<PageInfo>();

const props = defineProps<{
  title: string;
  cardPreviewIsCover: boolean;
  component: Component;
  pages: PageInfo[];
}>();

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
        <h3 class="gallery__title">{{ props.title }}</h3>
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
            <img v-if="page.banner" :src="page.banner.path" />
          </div>
        </div>
        <div class="gallery__card-footer">
          <img
            class="gallery__page-icon"
            v-if="page.icon"
            :src="page.icon.path"
          />
          <div>{{ page.title }}</div>
        </div>
      </div>
    </div>
  </div>
  <MainModalView
    provideName="pageModal"
    :component="props.component"
    :page="pageModal"
    :hideMainModal="hideModal"
    :addMainModalListener="addModalListener"
    v-if="isClicked && pageModal"
  />
</template>

<style lang="scss">
.gallery {
  overflow-x: auto;

  &:hover {
    .gallery__menu-item:nth-child(2) {
      visibility: visible;
    }
  }

  &__navbar {
    @include flex-layout($row-gap: 15px);
    margin-bottom: 30px;
  }

  &__menu {
    @include flex-layout($flex-direction: row);
    justify-content: space-between;
    border-bottom: 1px solid $black-2;
  }

  &__menu-item:nth-child(1) {
    @include flex-layout($flex-direction: row, $column-gap: 3px);
    align-items: center;
    font-weight: $fw-700;
    border-bottom: 2px solid $black;
    padding-bottom: 15px;
  }

  &__menu-item:nth-child(2) {
    @include flex-layout($flex-direction: row, $column-gap: 10px);
    visibility: hidden;

    button {
      all: unset;
      color: $black-8;
      cursor: pointer;
      box-sizing: border-box;
      padding: 7px 5px;
      margin-bottom: 5px;

      &:hover {
        border-radius: 10%;
        background-color: $gray-4;
      }
    }
  }

  &__title {
    font-weight: $fw-700;
    font-size: $fs-large;
  }

  &__cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 10px;
  }

  &__card-wrapper {
    border: 1px solid $black-1;
    border-radius: 5px;
    box-shadow: $box-shadow-2;
    cursor: pointer;
    font-size: $fs-small;
    color: $black-6;

    &:hover {
      background-color: $gray-2;
    }
  }

  &__card-content {
    @include flex-layout($row-gap: 15px);
    background-color: $gray-2;
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
    @include flex-layout($flex-direction: row, $column-gap: 8px);
    align-items: center;
    font-weight: $fw-900;
  }

  &__page-icon {
    width: 20px;
  }
}
</style>
