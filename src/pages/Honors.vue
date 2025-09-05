<script setup lang="ts">
import Empty from "@/components/Empty.vue";
import Heading from "@/components/Heading.vue";
import Text from "@/components/Text.vue";
</script>

<template>
  <div class="honors-and-awards">
    <Empty />
    <Heading heading-number="3">Top-performing student</Heading>
    <p>Programa Meninas Digitais</p>
    <Empty />
    <Text
      >Award from the Digital Girls Program and the Brazilian Computer Society,
      certifying the completion of a Bachelor's degree in Information Systems at
      IFSC – Caçador, as the top-performing student of the 2025/1 graduating
      class.</Text
    >
    <Empty />

    <Heading heading-number="3"
      >2nd place in the 1st Big Data & Data Analytics Datathon (2025/1)</Heading
    >
    <p>IFSC</p>
    <Empty />

    <Text
      >The theme of the competition was Sentiment Analysis, and it lasted for
      two weeks.
    </Text>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/main";
</style>
