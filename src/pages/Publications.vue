<script setup lang="ts">
import Empty from "@/components/Empty.vue";
import Heading from "@/components/Heading.vue";
import Text from "@/components/Text.vue";
import Link from "@/components/Link.vue";
</script>

<template>
  <div class="publications">
    <Empty />

    <Heading heading-number="3">
      Explorando tendências de carreiras de estudantes de sistemas de informação
      do IFSC-Câmpus Caçador através da linguagem de programação</Heading
    >
    <p>CNMAC. Jan 20, 2025</p>
    <Empty />

    <Text
      >This research aimed to analyze the career preferences and trends of students in the Information Systems program at IFSC – Caçador Campus, using a qualitative approach and statistical analysis in Python. We explored the most and least preferred professional areas and assessed students' satisfaction levels with their career choices. The goal was to provide insights into career perspectives and support more informed decision-making in the field of Information Technology.</Text
    >

    <br></br>

    <Link href="https://proceedings.sbmac.org.br/sbmac/article/view/4826" emoji="🎓">Access publication</Link>
  </div>
</template>
