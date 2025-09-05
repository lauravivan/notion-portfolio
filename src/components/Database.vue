<template>
  <table class="database">
    <thead>
      <tr>
        <th></th>
        <th width="100%"></th>
      </tr>
      <tr>
        <td class="database__property">
          <Icon :icon="icons.clock" />
          <slot name="dateTimeDesc"></slot>
        </td>
        <td class="database__property--val">
          <slot name="dateTimeValue">Empty</slot>
        </td>
      </tr>
      <tr>
        <td class="database__property">
          <Icon :icon="icons.list" />
          <slot name="multiSelectDesc"> </slot>
        </td>

        <td class="database__property--val">
          <MultiSelect
            v-if="multiSelectItems && multiSelectItems.length > 0"
            :items="multiSelectItems"
          />
          <div v-else>Empty</div>
        </td>
      </tr>
    </thead>
  </table>
  <Empty />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Empty from "@/components/Empty.vue";
import Icon from "@/components/Icon.vue";
import MultiSelect from "@/components/MultiSelect.vue";
import { useStore } from "vuex";

const store = useStore();

const icons = computed(() => store.getters.getIcons);
const activePage = computed(() => store.getters.getActivePage);

const props = defineProps(["page", "multiSelectItems"]);
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
@use "@/assets/scss/main";
@use "@/assets/scss/_mixin.scss" as mixin;
@use "@/assets/scss/_var" as var;

.database {
  margin-top: 7px;

  td {
    @extend .hover-default;
  }

  &__property {
    @include mixin.flex-layout($flex-direction: row, $column-gap: 5px);
    align-items: center;
    width: 160px !important;
    flex-wrap: wrap;

    @media (max-width: var.$screen-xs) {
      min-width: 100px;
      width: auto !important;
    }

    &--val {
      vertical-align: middle;
    }
  }
}
</style>
