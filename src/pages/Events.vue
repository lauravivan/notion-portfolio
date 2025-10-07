<script setup lang="ts">
import Callout from "@/components/Callout.vue";
import Empty from "@/components/Empty.vue";
import Heading from "@/components/Heading.vue";
import Image from "@/components/Image.vue";
import Link from "@/components/Link.vue";
</script>

<template>
  <div class="events">
    <Empty />
    <Heading heading-number="2">Meetup Codecon Ladies</Heading>
    <Callout
      >The Codecon Meetup is an evening event dedicated to discussions on
      technology and programming, featuring two presentations and a networking
      opportunity.</Callout
    >
    <Link
      emoji="🐈"
      href="https://eventos.codecon.dev/documentos/imprimir?i=28332382.05162310.5.8.87727823659275368&cc=A6530560-1A59-43F5-B1E8-4AD739668620"
      >Certificate Meetup Codecon Ladies #1</Link
    >
    <Link
      emoji="🐈"
      href="https://eventos.codecon.dev/documentos/imprimir?i=28181865.05162310.5.8.85858963659275368&cc=728CD6A5-7D5C-4C7A-8AA1-B550B3EB7FB3"
      >Certificate Meetup Codecon Ladies #2</Link
    >
    <Empty />
    <Image src="/meetup-codecon.webp" />
  </div>
</template>
