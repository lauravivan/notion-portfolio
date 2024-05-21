<template>
  <div class="reference">
    <toggleList
      :iconToOpen="icons.arrowRightFilled"
      :iconToClose="icons.arrowDownFilled"
      :detailsContent="ref.detailsContent"
      class="reference__toggle-list"
      v-for="(ref, index) in referenceToggles"
      :key="index"
    >
      <template #summaryContent>
        <div>{{ ref.summary }}</div>
      </template>
      <template #detailsContent>
        <li v-for="(item, key) in ref.detailsContent" :key="index++">
          <Text class="details__item" style="display: flex; column-gap: 10px">
            <div v-if="key === 'banner'">BANNER:</div>
            <div v-if="key === 'icon'">ICON:</div>
            <div v-if="key === 'mascot'">MASCOT:</div>
            <a target="_blank" :href="item.link"> by {{ item.author }}</a>
          </Text>
        </li>
      </template>
    </toggleList>
  </div>
</template>

<script setup>
import { icons } from "global";
import toggleList from "components/ToggleList.vue";
import Text from "UIElements/Text.vue";

const referenceToggles = [
  {
    summary: "About page",
    detailsContent: {
      banner: {
        link: "https://unsplash.com/photos/three-bicycles-parked-in-front-of-building-hwLAI5lRhdM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "Clay Banks",
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
        link: "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "Danis Lou",
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
        link: "https://unsplash.com/photos/school-of-orange-and-white-koi-58TJ5U21byY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "Daniel",
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
        link: "https://unsplash.com/photos/person-walking-on-street-while-holding-umbrella-MsMISAIe8Qw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "Andre Benz",
      },
      icon: {
        link: "https://www.flaticon.com/free-icons/reference",
        author: "Flaticon",
      },
    },
  },
  {
    summary: "Projects page",
    detailsContent: {
      banner: {
        link: "https://unsplash.com/photos/people-walking-on-sidewalk-during-night-time-6cfK0SEtpbY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "Pema Lama",
      },
      icon: {
        link: "https://www.flaticon.com/free-stickers/skill",
        author: "paulalee",
      },
    },
  },
  {
    summary: "TrendTide project",
    detailsContent: {
      mascot: {
        link: "https://www.svgrepo.com/svg/395885/black-cat",
        author: "googlefonts",
      },
    },
  },
  {
    summary: "Countdown project",
    detailsContent: {
      mascot: {
        link: "https://www.svgrepo.com/svg/49930/koala",
        author: "SVG Repo",
      },
    },
  },
  {
    summary: "Notion portfolio",
    detailsContent: {
      mascot: {
        link: "https://www.flaticon.com/stickers-pack/coffee-shop-348",
        author: "paulalee",
      },
    },
  },
];
</script>
