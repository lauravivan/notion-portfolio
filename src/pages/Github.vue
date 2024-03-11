<template>
  <div class="github">
    <div class="github__gallery-navbar">
      <ul class="github__gallery-menu">
        <li class="github__gallery-menu-item">
          <Gallery></Gallery>
          <span>Gallery</span>
        </li>
        <li class="github__gallery-menu-item">
          <button class="github__gallery-btn">Filter</button>
          <button class="github__gallery-btn">Sort</button>
        </li>
      </ul>

      <div>
        <h3 class="github__gallery-title">Repos</h3>
        <div class="github__gallery-filter"></div>
      </div>
    </div>

    <div class="github__repos-wrapper" v-if="data">
      <div
        class="github__repo-wrapper"
        v-for="repoInfo in data"
        :key="repoInfo.id"
      >
        <div class="github__repo-wrapper-header">
          <h4 class="github__repo-name">{{ repoInfo.name }}</h4>
          <p class="github__repo-desc">{{ repoInfo.description }}</p>
        </div>
        <div class="github__repo-wrapper-footer">
          <div class="github__repo-activities">
            <div>
              <Eye></Eye>
              <span>{{ repoInfo.watchers_count }}</span>
            </div>
            <div>
              <Fork></Fork>
              <span>{{ repoInfo.forks_count }}</span>
            </div>
            <div>
              <Star></Star>
              <span>{{ repoInfo.stargazers_count }}</span>
            </div>
          </div>

          <div class="github__repo-access">
            <a :href="repoInfo.html_url"><GithubRepo></GithubRepo></a>
            <a :href="repoInfo.homepage"><Link></Link></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Gallery from "components/icons/Gallery.vue";
import Eye from "components/icons/Eye.vue";
import Fork from "components/icons/Fork.vue";
import Star from "components/icons/Star.vue";
import GithubRepo from "components/icons/GithubRepo.vue";
import Link from "components/icons/Link.vue";
import { ref } from "vue";
import axios from "axios";

const data = ref(null);

axios
  .get("https://api.github.com/users/lauravivan/repos")
  .then((response) => {
    data.value = response.data;
  })
  .catch((error) => {
    console.error(error);
  });
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.github {
  overflow-x: auto;

  &:hover {
    .github__gallery-menu-item:nth-child(2) {
      visibility: visible;
    }
  }

  &__gallery-navbar {
    @include flex-layout($row-gap: 15px);
    margin-bottom: 30px;
  }

  &__gallery-menu {
    @include flex-layout($flex-direction: row);
    justify-content: space-between;
    border-bottom: 1px solid $black-2;
  }

  &__gallery-menu-item:nth-child(1) {
    @include flex-layout($flex-direction: row, $column-gap: 3px);
    align-items: center;
    font-weight: $fw-700;
    border-bottom: 2px solid $black;
    padding-bottom: 15px;
  }

  &__gallery-menu-item:nth-child(2) {
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

  &__gallery-title {
    font-weight: $fw-700;
    font-size: $fs-large;
  }

  &__repos-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 10px;
  }

  &__repo-wrapper {
    border: 1px solid $black-2;
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

  &__repo-wrapper-header {
    @include flex-layout($row-gap: 15px);
    background-color: $gray-2;
    padding: 15px 13px;
    height: 150px;
  }

  &__repo-wrapper-footer {
    padding: 10px 10px 0;
    @include flex-layout($flex-direction: row);
    justify-content: space-between;
    align-items: center;
  }

  &__repo-activities,
  &__repo-access {
    @include flex-layout($flex-direction: row, $column-gap: 10px);
  }
}
</style>
