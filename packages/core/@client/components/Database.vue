<script setup lang="ts">
import { onMounted } from "vue";
import { Empty, Icon, MultiSelect } from ".";
// import { useStore } from "vuex";
import { Icons } from "@core/enum";

// const store = useStore;

// const activePage = computed(() => store.getters.getActivePage);

const props = defineProps(["page", "multiSelectItems"]);
// const page = ref(null);

onMounted(() => {
  // if (props.page) {
  //   page.value = props.page;
  // } else {
  //   page.value = activePage.value;
  // }
});
</script>

<template>
  <table class="database">
    <thead>
      <tr>
        <th></th>
        <th width="100%"></th>
      </tr>
      <tr>
        <td class="database__property">
          <Icon :icon="Icons.clock" />
          <slot name="dateTimeDesc"></slot>
        </td>
        <td class="database__property--val">
          <slot name="dateTimeValue">Empty</slot>
        </td>
      </tr>
      <tr>
        <td class="database__property">
          <Icon :icon="Icons.list" />
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

<style scoped lang="scss">
.database {
  margin-top: 7px;

  td {
    @extend .hover-default;
  }

  &__property {
    @include flex-layout($flex-direction: row, $column-gap: 5px);
    align-items: center;
    width: 160px !important;
    flex-wrap: wrap;

    @media (max-width: $screen-xs) {
      min-width: 100px;
      width: auto !important;
    }

    &--val {
      vertical-align: middle;
    }
  }
}
</style>
