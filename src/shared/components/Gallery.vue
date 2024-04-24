<template>
  <div class="gallery">
    <div class="gallery__navbar">
      <ul class="gallery__menu">
        <li class="gallery__menu-item">
          <Icon :icon="icons.gridView" />
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
        v-for="page in props.pages"
        :key="page.pageId"
        @click="showPageModal(page)"
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
            <img :src="page.pageBanner" />
          </div>
        </div>
        <div class="gallery__card-footer">
          <img class="gallery__page-icon" :src="page.pageIcon" />
          <div>{{ page.pageName }}</div>
        </div>
      </div>
    </div>
  </div>
  <MainModalView
    :provideName="'pageModal'"
    :pageClicked="pageClicked"
    :component="props.component"
  />
</template>

<script setup>
import Icon from "UIElements/Icon.vue";
import { icons } from "global";
import useModal from "hooks/useModal";
import { provide, ref } from "vue";
import MainModalView from "components/MainModalView.vue";

const props = defineProps([
  "galleryTitle",
  "pages",
  "cardPreviewIsCover",
  "component",
]);
const { showModal } = useModal();
const modalRef = ref(null);
const pageClicked = ref(null);

provide("pageModal", modalRef);

function showPageModal(page) {
  pageClicked.value = page;

  setTimeout(() => {
    showModal(modalRef);
  }, 250);
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

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
