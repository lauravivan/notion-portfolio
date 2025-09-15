<template>
  <div class="contact">
    <Callout>Reach me</Callout>
    <BulletList :items="reachMeItems" />

    <Empty />

    <Callout>Social Media</Callout>
    <BulletList :items="mediaItems" />
  </div>
</template>

<script setup lang="ts">
import Callout from "@/components/Callout.vue";
import BulletList from "@/components/BulletList.vue";
import Empty from "@/components/Empty.vue";

const reachMeItems = ["E-mail: lauvivang@gmail.com"];

const mediaItems = [
  "LinkedIn: linkedin.com/in/vivan-laura",
  "Github: @lauravivan",
  "Devto: @vivanlaura",
  "X: @arualvivan",
  "Lattes: http://lattes.cnpq.br/5593790214023154",
];
</script>
