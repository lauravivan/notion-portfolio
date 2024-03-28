<template>
  <div class="icon" v-if="props.icon">
    <ion-icon v-if="!props.icon.matIcons" :name="props.icon.name"></ion-icon>
    <span class="material-icons" v-if="props.icon.matIcons">
      {{ props.icon.name }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps(["icon"]);
</script>

<style lang="scss">
@import "@/assets/scss/main";

.icon {
  color: $black-3;
  font-size: 20px;
}

.material-icons {
  font-size: 20px;
}
</style>
