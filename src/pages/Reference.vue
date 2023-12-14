<template>
    <PageLayout>
        <template v-slot:pageSlot>
            <div class="reference page-slot">
                <div class="reference__collapsibles-wrapper" v-if="referenceInfo">
                    <div class="reference__collapsible-wrapper" v-for="info in referenceInfo">
                        <details class="reference__details">
                            <summary class="reference__summary">
                                {{ info.name }}
                            </summary>

                            <ul class="reference__collapsible-list">
                                <li class="reference__collapsible-list-item">
                                    <span class="reference__collapsible-category">BANNER:</span>
                                    <div class="reference__collapsible-category-desc" v-html="info.banner"></div>
                                </li>
    
                                <li class="reference__collapsible-list-item">
                                    <span class="reference__collapsible-category">ICON: </span>
                                    <div class="reference__collapsible-category-desc" v-html="info.icon"></div>
                                </li>
                            </ul>
                        </details>
                    </div>

                    <div class="reference__collapsible-wrapper">
                        <details class="reference__details">
                            <summary class="reference__summary">
                                Project
                            </summary>

                            <ul class="reference__collapsible-list">
                                <li class="reference__collapsible-list-item">
                                    <span class="reference__collapsible-category">ICONS:</span>
                                    <a href="https://www.flaticon.com/stickers-pack/coffee-shop-348">Coffee shop stickers pack</a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </template>
    </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/PageLayout.vue'
import store from '@/store/index.js'

const referenceInfo = store.getters.getReferenceInfo
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.reference {
    &__collapsibles-wrapper {
        @include flex-layout($row-gap: 20px);
    }

    &__details[open] {
        .reference__summary::before {
            content: url('data:image/svg+xml,<svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width="33px" height="28px"><polygon points="3,5 7,10 11,5"></polygon></svg>');
        }
    }

    &__summary {
        user-select: none;
        cursor: pointer;
        margin-bottom: 10px;
        @include flex-layout($flex-direction: row);
        align-items: center;

        &::before {
            content: url('data:image/svg+xml,<svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width="33px" height="28px"><polygon points="5,3 10,7 5,11"></polygon></svg>');
        }

        &:hover::before {
            border-radius: 7%;
            background-color: $gray-4;
        }
    }

    &__collapsible-desc {
        @include flex-layout($flex-direction: row);
        align-items: center;
    }

    &__collapsible-category {
        font-weight: $fw-500;
        text-decoration: underline;
    }

    &__collapsible-list {
        @include flex-layout($row-gap: 20px);
        margin-left: 30px;
    }

    &__collapsible-list-item {
        @include flex-layout($flex-direction: row, $column-gap: 10px);
    }
}
</style>