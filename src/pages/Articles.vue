<script setup lang="ts">
import Empty from "@/components/Empty.vue";
import Heading from "@/components/Heading.vue";
import Text from "@/components/Text.vue";
import Link from "@/components/Link.vue";
</script>

<template>
  <div class="articles">
    <Empty />

    <Heading heading-number="2">
      Lectures of JS Unit Testing - The Practical Guide</Heading
    >
    <Text class="highlight">Published on Aug 29, 2024</Text>
    <br></br>
    <Text>Language: English</Text>
    <Empty/>
    <Text>This article is a summary of what I've learned when I was taking the "Lectures of JS Unit Testing - The Practical Guide" course lectured by Maximilian Schwarzmüller.</Text>
    <Link href="https://dev.to/vivanlaura/lectures-of-js-unit-testing-the-practical-guide-mhh" emoji="🎓">Access publication</Link>

    <Empty/>

    <Heading heading-number="2">
    Diagrama de Classes: Associação X Generalização X Agregação X Composição</Heading>
    <Text class="highlight">Published on Aug 1, 2025</Text>
    <br></br>
    <Text>Language: Portuguese BR</Text>
    <Empty/>
    <Text>This article is a summary of "UML distilled: a brief guide to the standard Object Modeling Language" book by Martin Fowler focused on my most difficulties when I was working in my College final project.</Text>
    <Link href="https://dev.to/vivanlaura/diagrama-de-classes-associacao-x-generalizacao-x-composicao-x-agregacao-233k" emoji="🎓">Access publication</Link>
  </div>
</template>
