<script setup lang="ts">
import { Text, Callout, LinkMention, Empty } from "@core/index.ts";
import metadata from "@/metadata";
</script>

<template>
  <Text
    >Create your own page with the components available. Feel free to explore
    all of them based on your needs.</Text
  >
  <Callout emoji="👀">You can find them in the /components folder</Callout>
  <Empty/>
  <LinkMention :page="metadata.pages['page-example-2']" emoji="💫"></LinkMention>
</template>