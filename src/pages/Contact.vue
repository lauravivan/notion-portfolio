<template>
  <div class="contact">
    <Callout>Reach me</Callout>
    <BulletList :items="reachMeItems" />

    <Empty />

    <Callout>Social Media</Callout>
    <BulletList :items="mediaItems" />
  </div>
</template>

<script setup>
import Callout from "UIElements/Callout.vue";
import BulletList from "components/BulletList.vue";
import Empty from "UIElements/Empty.vue";

const reachMeItems = ["E-mail: lauvivang@gmail.com"];

const mediaItems = [
  "LinkedIn: linkedin.com/in/laura-vivan-gonçalves-718409213",
  "Instagram: @lauvivan_",
  "Github: @lauravivan",
  "Devto: @vivanlaura",
];
</script>
