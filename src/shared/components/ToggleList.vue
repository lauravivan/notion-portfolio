<template>
  <div class="toggle-list">
    <table class="details">
      <tr class="details__summary">
        <th class="details__summary--icon">
          <Icon :icon="icon" @click.prevent.stop="toToggle" />
        </th>
        <th class="details__summary--content">
          <slot name="summaryContent" />
        </th>
      </tr>

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
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Icon from "UIElements/Icon.vue";
import useDisplay from "hooks/useDisplay";

const detailsContentRef = ref(null);
const props = defineProps(["iconToOpen", "iconToClose"]);
const { toggleDisplay, setDisplayToNone } = useDisplay();
const icon = ref(props.iconToOpen);

const toToggle = () => {
  toggleDisplay(detailsContentRef);

  const displayState = detailsContentRef.value
    ? detailsContentRef.value.style.display
    : null;

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
@import "@/assets/scss/main";

th {
  text-align: start;
  margin: 0;
  padding: 0;
}

.toggle-list {
  margin: $DEFAULT_SPACING 0;
}

.details {
  &__summary {
    &--icon {
      padding: 4px;

      > div {
        @extend .button;
        font-size: $fs-medium + 0.1rem;
        color: $black;
      }
    }

    &--content {
      vertical-align: middle;
    }
  }

  &__content {
    @include spacing($mt: $DEFAULT_SPACING, $mb: $DEFAULT_SPACING);
  }

  &__item {
    margin: $DEFAULT_SPACING 0;
  }
}
</style>
