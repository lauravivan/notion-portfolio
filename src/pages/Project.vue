<template>
  <div class="project" v-if="page">
    <Text
      >Access here:
      <a target="_blank" :href="page.pageData.homepage"
        >Link to project</a
      ></Text
    >

    <div class="iframe-wrapper">
      <Heading headingNumber="3"> Preview: </Heading>
      <iframe class="iframe" :src="page.pageData.homepage"></iframe>
    </div>

    <Text>Languages used:</Text>
    <BulletList :items="page.pageData.languages" />
  </div>
</template>

<script setup>
import { activePage } from "global";
import Database from "components/Database.vue";
import Text from "UIElements/Text.vue";
import Heading from "UIElements/Heading.vue";
import BulletList from "components/BulletList.vue";
import { ref, onMounted } from "vue";

const props = defineProps(["page"]);
const page = ref(null);

onMounted(() => {
  if (props.page) {
    page.value = props.page;
  } else {
    page.value = activePage.value;
  }
});
</script>

<style lang="scss">
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
  height: 330px;
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
