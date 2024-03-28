<template>
  <Empty />
  <Gallery :galleryTitle="'Repos'" :data="data" />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Gallery from "components/Gallery.vue";
import Empty from "UIElements/Empty.vue";
import { icons } from "global";

const data = ref([]);

axios
  .get("https://api.github.com/users/lauravivan/repos")
  .then((response) => {
    for (const dt of response.data) {
      const dtObj = {
        id: dt.id,
        cardContent: [dt.name, dt.description],
        cardFooter: [
          {
            icon: icons.value.eye,
            text: dt.watchers_count.toString(),
          },
          {
            icon: icons.value.forkCode,
            text: dt.forks_count.toString(),
          },
          {
            icon: icons.value.star,
            text: dt.stargazers_count.toString(),
          },
          {
            icon: icons.value.code,
            link: dt.html_url,
          },
          {
            icon: icons.value.link,
            link: dt.homepage,
          },
        ],
      };

      data.value.push(dtObj);
    }
  })
  .catch((error) => {
    console.error(error);
  });
</script>
