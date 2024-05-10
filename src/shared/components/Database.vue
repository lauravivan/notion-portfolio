<template>
  <table class="database">
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
  </table>
  <Empty />
</template>

<script setup>
import { activePage } from "global";
import { onMounted, ref } from "vue";
import Empty from "UIElements/Empty.vue";
import Icon from "UIElements/Icon.vue";
import { icons } from "global";
import MultiSelect from "UIElements/MultiSelect.vue";

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
@import "@/assets/scss/main";

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
