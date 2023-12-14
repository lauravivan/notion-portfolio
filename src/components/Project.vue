<template>
    <div class="projet">
        <p class="project__link">Access here: <a target="_blank" :href="activePage.projectUrl">Our Pet Store Project</a></p>
        
        <div class="iframe-wrapper">
            <h3 class="iframe-title">Preview: </h3>
            <iframe class="iframe" :src="activePage.projectUrl"></iframe>
        </div>

        <div v-if="languages.languages">
            <div class="languages-wrapper">
                <span>Languages used: </span>
                <div class="languages">
                    <div v-for="(value, language) in languages.languages">
                        <span class="language">{{ language }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import store from '@/store/index.js'
import { defineProps } from 'vue'

const activePage = store.getters.getActivePage
const languages = defineProps(['languages'])
console.log(languages)
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
.project {
    &__link {
        margin-top: 30px;
        border-bottom: 1px solid $gray-9;
        padding-bottom: 20px;
    }
}
.iframe-title {
    font-size: $fs-x-large;
    font-weight: $fw-500;
}
.iframe-wrapper  {
    @include flex-layout($row-gap: 10px);
    @include spacing-2($my: 60px);
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