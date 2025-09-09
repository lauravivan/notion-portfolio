<template>
  <div class="reference">
    <ToggleList
      :iconToOpen="icons.arrowRightFilled"
      :iconToClose="icons.arrowDownFilled"
      :detailsContent="ref.detailsContent"
      class="reference__toggle-list"
      v-for="(ref, index) in references"
      :key="index"
    >
      <template #summaryContent>
        <div>{{ ref.summary }}</div>
      </template>
      <template #detailsContent>
        <li
          class="details__item"
          v-for="(item, key) in ref.detailsContent"
          :key="key"
        >
          <Text style="display: flex; column-gap: 10px">
            <div v-if="key === 'banner'">BANNER:</div>
            <div v-if="key === 'icon'">ICON:</div>
          </Text>
          <Link :href="item?.link" emoji="🔗"> by {{ item?.author }}</Link>
        </li>
      </template>
    </ToggleList>
  </div>
</template>

<script setup lang="ts">
import ToggleList from "@/components/ToggleList.vue";
import Text from "@/components/Text.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import Link from "@/components/Link.vue";

const store = useStore();
const icons = computed(() => store.getters.getIcons);
const references = computed<ReferenceToggle[]>(
  () => store.getters.getReferences
);
</script>

<style lang="scss">
.details {
  &__item {
    display: flex;
  }
}
</style>
