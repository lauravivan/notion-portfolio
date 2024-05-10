<template>
  <iframe class="iframe" :src="props.src"></iframe>
</template>

<script setup>
const props = defineProps(["src"]);
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.iframe {
  width: 100%;
  height: 330px;
}
</style>
