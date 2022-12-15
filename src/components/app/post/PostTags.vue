<script setup lang="ts">
import { createTags, getAllTags } from '@/composables/Post'

const tags = createTags(getAllTags())
</script>

<template>
  <VostTags :tags="tags" />
</template>
