<script setup lang="ts">
import { Database } from "@core/index.ts";
import metadata from "@/metadata";
</script>

<template>
 <Database layout="gallery" :card-preview-is-cover="true" :pages="Object.values(metadata.pages)" />
</template>