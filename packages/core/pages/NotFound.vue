<script setup lang="ts">
const props = defineProps(["previousRoute"]);
</script>

<template>
  <div class="not-found">
    <div>
      <div>
        <p>This content does not exist</p>
        <div class="not-found__btn">
          <router-link :to="props.previousRoute || '/'"
            >Back to my content</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  position: relative;
  @include sizing(100%, 100vh);

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    > div {
      @include flex-layout($row-gap: 15px);
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    a {
      all: unset;
      display: block;
      width: max-content;
      background-color: $active;
      color: $white !important;
      padding: 0.5rem;
      border-radius: 3px;

      &:hover {
        color: $white !important;
      }
    }
  }
}
</style>
