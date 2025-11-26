<script setup lang="ts">
import { ToggleList } from "../@client/components";
import NestedLink from "./NestedLink.vue";
// import { setTabs as setTabsLS } from "../util/local-storage";
import { Icons } from "@core/enum";
import useStore from "@core/store";

const store = useStore();

const props = defineProps(["page"]);

// function updateTabs(page: PageInfo) {
//   // const tabs = [...getGlobalProperties.value.tabs];
//   // const activeTab = getGlobalProperties.value.activeTab;
//   // tabs[activeTab] = page;
//   // setGlobalProperty("tabs", tabs);
//   // setTabsLS(tabs);
// }
</script>

<template>
  <div class="nav-link">
    <ToggleList
      class="nav-link__toggle-list"
      :iconToOpen="Icons.arrowRight"
      :iconToClose="Icons.arrowDown"
      :class="
        store.getActivePage.id == props.page.id ? 'nav-link__toggle-list--active' : ''
      "
    >
      <template #summaryContent>
        <router-link
          class="nav-link__link"
          :to="props.page.path"
        >
          <div>
            <div style="max-width: 1.1rem">
              <img
                :src="props.page.iconPath"
                style="width: 100%; height: auto"
              />
            </div>
            <div class="nav-link__pagename">{{ props.page.title }}</div>
          </div>
        </router-link>
      </template>
      <template #detailsContent>
        <div
          v-if="props.page.pages && Object.keys(props.page.pages).length > 0"
        >
          <NestedLink :pages="props.page.pages" />
        </div>
        <div v-else>
          <div class="details__item">No pages inside</div>
        </div>
      </template>
    </ToggleList>
  </div>
</template>

<style lang="scss">
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
    padding: 4px 0;

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
