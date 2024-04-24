<template>
  <div class="multi-select">
    <div
      v-for="item in props.items"
      :key="item"
      :style="{ 'background-color': getColor() }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["items"]);
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

<style lang="scss">
@import "@/assets/scss/main.scss";

.multi-select {
  display: flex;
  align-items: center;
  column-gap: 5px;

  div {
    padding: 0.3rem 0.5rem;
    width: max-content;
    border-radius: 2px;
  }
}
</style>
