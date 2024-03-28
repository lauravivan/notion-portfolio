<template>
  <div class="nav-links">
    <div class="nav-links__category">
      {{ props.categoryName }}
    </div>
    <div>
      <div
        v-for="page in props.categoryItems"
        class="nav-links__page"
        :class="activePageId === page.pageId ? 'nav-links__page--active' : ''"
        :key="page.pageId"
      >
        <ToggleList
          class="nav-links__toggle-list"
          :iconToOpen="icons.arrowRight"
          :iconToClose="icons.arrowDown"
        >
          <template #summaryContent>
            <router-link :to="page.pagePath">
              <div>
                <div style="max-width: 1.1rem">
                  <img :src="page.pageIcon" style="width: 100%; height: auto" />
                </div>
                <div class="nav-links__pagename">{{ page.pageName }}</div>
              </div>
            </router-link>
          </template>
          <template #detailsContent>
            <div class="details__item">No pages inside</div>
          </template>
        </ToggleList>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ToggleList from "components/ToggleList.vue";
import { activePage, icons } from "global";

const props = defineProps(["categoryName", "categoryItems"]);

const activePageId = computed(() => {
  if (activePage.value) {
    return activePage.value.pageId;
  } else {
    return "";
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/main";

.nav-links {
  &__category {
    margin-bottom: 0.6rem;
    font-weight: $fw-600;
  }

  &__toggle-list {
    margin: 0;

    .details {
      &__summary {
        @extend .hover-default;

        &--icon {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;

          > div {
            font-size: $fs-medium;
          }
        }

        &--content {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
          width: 100%;
        }
      }
    }
  }

  &__page {
    margin-bottom: 1px;

    a {
      all: unset;
      display: block;

      > div {
        @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
        align-items: center;
      }
    }

    &--active {
      .details {
        &__summary {
          background-color: $gray-4;
        }
      }

      .nav-links__pagename {
        color: $black-9;
      }
    }
  }
}
</style>
