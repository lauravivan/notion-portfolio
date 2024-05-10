<template>
  <div class="not-found">
    <div>
      <div>
        <p>This content does not exist</p>
        <div class="not-found__btn">
          <router-link :to="tab.pagePath">Back to my content</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = localStorage.getItem("activeTab");
const tab = JSON.parse(localStorage.getItem("tabs"))[activeTab];
</script>

<style lang="scss">
@import "@/assets/scss/main";

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
