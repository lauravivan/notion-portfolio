<script setup lang="ts">
import { Text, Callout, Heading, Empty, Database } from "@core/index.ts";
import metadata from "@/metadata";
</script>

<template>
  <Database layout="gallery" title="My database" :card-preview-is-cover="true" :pages="Object.values(metadata.pages)" />
  <Heading :level="2">Mundo</Heading>
  <Text
    >Create your own page with the components available. Feel free to explore
    all of them based on your needs.</Text
  >
  <Empty />
  <Callout emoji="👀">You can find them in the /components folder</Callout>
</template>
