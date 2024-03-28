<template>
  <div class="reference">
    <div v-for="(ref, index) in referenceToggles" :key="index">
      <toggleList
        :iconToOpen="icons.arrowRightFilled"
        :iconToClose="icons.arrowDownFilled"
        :detailsContent="ref.detailsContent"
        class="reference__toggle-list"
      >
        <template #summaryContent>
          <div>{{ ref.summary }}</div>
        </template>
        <template #detailsContent>
          <li v-for="(item, key) in ref.detailsContent" :key="index++">
            <div v-if="key === 'banner'" class="details__item">
              <span>BANNER: </span>
              <a target="_blank" :href="item.link">
                photo by {{ item.author }}</a
              >
            </div>
            <div v-if="key === 'icon'" class="details__item">
              <span>ICON: </span>
              <a target="_blank" :href="item.link">by {{ item.author }}</a>
            </div>
          </li>
        </template>
      </toggleList>
    </div>
  </div>
</template>

<script setup>
import { icons } from "global";
import toggleList from "components/ToggleList.vue";

const referenceToggles = [
  {
    summary: "About page",
    detailsContent: {
      banner: {
        link: "https://unsplash.com/photos/japanese-lantern-over-city-bike-at-nighttime-oCZHIa1D4EU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "Jase Bloor",
      },
      icon: {
        link: "https://www.svgrepo.com/vectors/info/",
        author: "Svgrepo",
      },
    },
  },
  {
    summary: "Contact page",
    detailsContent: {
      banner: {
        link: "https://www.pexels.com/photo/crowd-surrounded-by-buildings-during-night-time-2070033/",
        author: "Satoshi Hirayama",
      },
      icon: {
        link: "https://www.svgrepo.com/svg/464447/contact-book",
        author: "Mary Akveo",
      },
    },
  },
  {
    summary: "Github page",
    detailsContent: {
      banner: {
        link: "https://unsplash.com/photos/pink-flowers-McsNra2VRQQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "AJ",
      },
      icon: {
        link: "https://www.svgrepo.com/svg/506654/github",
        author: "blivesta",
      },
    },
  },
  {
    summary: "Reference page",
    detailsContent: {
      banner: {
        link: "https://unsplash.com/photos/empty-pathway-in-between-stores-wfwUpfVqrKU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "Alex Knight",
      },
      icon: {
        link: "https://www.flaticon.com/free-icons/reference",
        author: "Flaticon",
      },
    },
  },
  {
    summary: "General",
    detailsContent: [],
  },
];
</script>
