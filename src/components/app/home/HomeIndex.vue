<script setup lang="ts">
import HomePage from './HomePage.vue'
import HomeHero from './HomeHero.vue'
import PostList from '@/components/app/post/PostList.vue'
import TagList from '@/components/app/tag/TagList.vue'
import { getPosts } from '@/composables/Post'

const posts = getPosts()
</script>

<template>
  <HomePage>
    <HomeHero />

    <LayoutTwoColumn class="layout">
      <template #main>
        <PostList :posts="posts" />
      </template>
      <template #side-menu>
        <TagList />
      </template>
    </LayoutTwoColumn>
  </HomePage>
</template>

<style lang="postcss" scoped>
.layout {
  margin: 32px auto;
}
</style>
