<template>
  <div class="nav-link">
    <ToggleList
      class="nav-link__toggle-list"
      :iconToOpen="icons.arrowRight"
      :iconToClose="icons.arrowDown"
      :class="
        activePageId == props.page.pageId ? 'nav-link__toggle-list--active' : ''
      "
    >
      <template #summaryContent>
        <router-link class="nav-link__link" :to="props.page.pagePath">
          <div>
            <div style="max-width: 1.1rem">
              <img
                :src="props.page.pageIcon"
                style="width: 100%; height: auto"
              />
            </div>
            <div class="nav-link__pagename">{{ props.page.pageName }}</div>
          </div>
        </router-link>
      </template>
      <template #detailsContent>
        <div v-if="Object.keys(props.page.pages).length > 0">
          <NestedLink :pages="props.page.pages" />
        </div>
        <div v-else>
          <div class="details__item">No pages inside</div>
        </div>
      </template>
    </ToggleList>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ToggleList from "components/ToggleList.vue";
import { icons, activePage } from "global";
import NestedLink from "components/NestedLink.vue";

const props = defineProps(["page"]);

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

.nav-link {
  margin-bottom: 1px;

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
            color: $black-3;
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

  &__link {
    all: unset;
    display: block;

    > div {
      @include flex-layout($flex-direction: row, $column-gap: 0.4rem);
      align-items: center;
    }
  }
}

.nav-link__toggle-list {
  &--active {
    .details > .details__summary {
      background-color: $black-1 !important;
    }

    .details__content .details .details__summary {
      background-color: transparent !important;
    }

    .nav-link__pagename {
      color: $black-9;
    }
  }
}
</style>
