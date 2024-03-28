<template>
  <div class="project">
    <p class="project__link">
      Access here:
      <a target="_blank" :href="activePage.projectUrl">Link to project</a>
    </p>

    <div class="iframe-wrapper">
      <h3 class="iframe-title">Preview:</h3>
      <iframe class="iframe" :src="activePage.projectUrl"></iframe>
    </div>

    <div v-if="languages">
      <div class="languages-wrapper">
        <span>Languages used: </span>
        <div class="languages">
          <div v-for="(value, language) in languages">
            <span class="language">{{ language }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { activePage } from "global";
import axios from "axios";

const languages = ref(null);

onMounted(async () => {
  const url = activePage._value.githubUrl + "languages";

  try {
    const response = await axios.get(url);
    languages.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.project {
  &__link {
    margin-top: 30px;
    border-bottom: 1px solid $gray-9;
    padding-bottom: 20px;
  }
}
.iframe-title {
  font-size: $fs-xl;
  font-weight: $fw-500;
}
.iframe-wrapper {
  @include flex-layout($row-gap: 10px);
  margin: 60px 0;
}
.iframe {
  width: 100%;
  height: 500px;
}

.languages-wrapper {
  margin-top: 100px;
  @include flex-layout($row-gap: 40px);

  > span {
    font-size: $fs-large;
    text-decoration: underline;
    font-weight: $fw-500;
  }
}

.languages {
  @include flex-layout($flex-direction: row, $column-gap: 10px);
}

.language {
  @include language($baby-blue);
}
</style>
