<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppHero from '@/components/parts/AppHero.vue'
import LayoutTwoColumn from '@/components/layout/LayoutTwoColumn.vue'
import PostList from '@/components/post/PostList.vue'
import TagList from '@/components/tag/TagList.vue'
import { getPosts, retrieve, parseToText } from '@/composables/Post'

const router = useRouter()
const posts = getPosts()

const featuredPost = posts[0]
</script>

<template>
  <AppHero
    :title="featuredPost.title"
    :description="retrieve(parseToText(featuredPost.body), 100, '...')"
    background-image="/img/hero-image_nick-brunner.jpg"
    :on-click-button="() => router.push(`posts/${featuredPost.slug}`)"
  />

  <LayoutTwoColumn class="layout">
    <template #main>
      <PostList :posts="posts" />
    </template>
    <template #side-menu>
      <TagList />
    </template>
  </LayoutTwoColumn>
</template>

<style lang="postcss" scoped>
.layout {
  margin: 32px auto;
}
</style>
