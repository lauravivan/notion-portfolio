<template>
  <div class="reference">
    <toggleList
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
        <li v-for="(item, key) in ref.detailsContent" :key="key">
          <Text class="details__item" style="display: flex; column-gap: 10px">
            <div v-if="key === 'banner'">BANNER:</div>
            <div v-if="key === 'icon'">ICON:</div>
            <!-- <div v-if="key === 'mascot'">MASCOT:</div> -->
            <a target="_blank" :href="item?.link"> by {{ item?.author }}</a>
          </Text>
        </li>
      </template>
    </toggleList>
  </div>
</template>

<script setup lang="ts">
import toggleList from "@/components/ToggleList.vue";
import Text from "@/components/Text.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const icons = computed(() => store.getters.getIcons);
const references = computed<ReferenceToggle[]>(
  () => store.getters.getReferences
);
</script>
