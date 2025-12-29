<script setup lang="ts">
import { Icons } from "@core/enum";
import Icon from "@core/@client/components/Icon.vue";
import type { PageInfo } from "@core/@types";

const props = defineProps<{ page: PageInfo }>();

//purple, blue, yellow, brown, green, orange and gray
const colors = [
  "cdb4db",
  "bde0fe",
  "ffd275",
  "ba9378",
  "d0f0c0",
  "fec89a",
  "ccc5b9",
];

function getColor() {
  const randomNumber = Math.floor(Math.random() * 6);
  return "#" + colors[randomNumber];
}
</script>

<template>
  <table
    class="database"
    v-if="props.page.parentPage && $props.page.databaseInfo"
  >
    <thead>
      <tr>
        <th></th>
        <th width="100%"></th>
      </tr>
      <tr
        v-for="[key, value] in Object.entries($props.page.databaseInfo)"
        class="database__properties"
        :key="key"
      >
        <td class="database__property">
          <Icon v-if="value.icon" :icon="Icons[value.icon]" />
          <span>{{ key }}</span>
        </td>
        <td class="database__property database__property--val">
          <span v-if="value.value && typeof value.value === 'string'">{{
            value.value
          }}</span>
          <div
            v-else-if="Array.isArray(value.value) && value.value.length > 0"
            class="multi-select"
          >
            <div
              v-for="item in value.value"
              :key="item"
              :style="{ 'background-color': getColor() }"
            >
              {{ item }}
            </div>
          </div>
          <span v-else>Empty</span>
        </td>
      </tr>
    </thead>
  </table>
</template>

<style lang="scss">
.database {
  margin-bottom: 20px;

  &__properties {
    display: flex;
    column-gap: 10px;
  }

  &__property {
    display: flex;
    width: max-content !important;
    min-width: 100px;
    column-gap: 5px;
    align-items: center;
    flex-wrap: wrap;
    @extend .hover-default;

    &--val {
      vertical-align: middle;
    }
  }
}

.multi-select {
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;

  div {
    padding: 0.3rem 0.5rem;
    width: max-content;
    border-radius: 2px;
  }
}
</style>
