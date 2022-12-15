<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getPost } from '@/composables/Post'

const route = useRoute()

const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const post = getPost(slug)
</script>

<template>
  <VostPage :title="post?.title ?? ''">
    <slot />
  </VostPage>
</template>
