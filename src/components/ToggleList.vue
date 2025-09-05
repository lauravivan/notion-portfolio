<template>
  <div class="toggle-list">
    <table class="details">
      <thead>
        <tr class="details__summary">
          <th class="details__summary--icon">
            <Icon :icon="icon" @click.prevent.stop="toToggle" />
          </th>
          <th class="details__summary--content">
            <slot name="summaryContent" ref="summaryContentRef" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td></td>
          <td>
            <div class="details__content" ref="detailsContentRef">
              <ul>
                <slot name="detailsContent"></slot>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Icon from "@/components/Icon.vue";
import useDisplay from "@/hooks/useDisplay";

const detailsContentRef = ref(null);
const props = defineProps(["iconToOpen", "iconToClose"]);
const { toggleDisplay, setDisplayToNone } = useDisplay();
const icon = ref(props.iconToOpen);
const summaryContentRef = ref(null);

const toToggle = () => {
  toggleDisplay(detailsContentRef);

  // const displayState = detailsContentRef.value
  //   ? detailsContentRef.value.style.display
  //   : null;

  const displayState = null;

  if (displayState === "block") {
    icon.value = props.iconToClose;
  } else {
    icon.value = props.iconToOpen;
  }
};

onMounted(() => {
  setDisplayToNone(detailsContentRef);
});
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/_var" as var;

th {
  text-align: start;
  margin: 0;
  padding: 0;
}

.toggle-list {
  margin: var.$DEFAULT_SPACING 0;
}

.details {
  &__summary {
    &--icon {
      padding: 4px;

      > div {
        @extend .button;
        font-size: var.$fs-medium + 0.1rem;
        color: var.$black;
      }
    }

    &--content {
      vertical-align: middle;
    }
  }

  &__content {
    margin: 5px 0;
  }

  &__item {
    margin: var.$DEFAULT_SPACING 0;
  }
}
</style>
