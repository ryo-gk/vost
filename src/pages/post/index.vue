<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppPage from '@/components/parts/AppPage.vue'
import PostDetail from '@/components/post/PostDetail.vue'
import { getPost } from '@/composables/Post'

const route = useRoute()

const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const post = getPost(slug)
</script>

<template>
  <AppPage :title="post?.title ?? ''">
    <PostDetail />
  </AppPage>
</template>
