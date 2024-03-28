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
      <div class="gallery__card-wrapper" v-for="dt in props.data" :key="dt.id">
        <div class="gallery__card-content">
          <div v-for="cc in dt.cardContent">
            {{ cc }}
          </div>
        </div>
        <div class="gallery__card-footer">
          <div v-for="cf in dt.cardFooter">
            <div v-if="cf.text" style="display: flex; column-gap: 2px">
              <Icon
                class="gallery__card-footer-icon"
                v-if="cf.icon"
                :icon="cf.icon"
              />
              <span>{{ cf.text }}</span>
            </div>

            <div>
              <a v-if="cf.link" :href="cf.link" target="_blank">
                <Icon
                  class="gallery__card-footer-icon"
                  v-if="cf.icon"
                  :icon="cf.icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "UIElements/Icon.vue";
import { icons } from "global";

const props = defineProps(["galleryTitle", "data"]);
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
    height: 200px;
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
    border-bottom: 1px solid $black-1;
    @include flex-layout($row-gap: 15px);
    background-color: $gray-2;
    padding: 15px 13px;
    height: 160px;
  }

  &__card-footer {
    padding: 10px;
    @include flex-layout($flex-direction: row);
    justify-content: space-between;
    align-items: center;
    font-weight: $fw-900;
  }

  &__card-footer-icon.icon {
    color: $black !important;
  }
}
</style>
