<script setup lang="ts">
import BPage from '@/components/parts/BPage.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppHero from '@/components/AppHero.vue'
import LayoutTwoColumn from '@/components/layout/LayoutTwoColumn.vue'
import PostList from '@/components/post/PostList.vue'
import TagList from '@/components/tag/TagList.vue'
import { getPosts, retrieve, parseToText } from '@/composables/Post'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = getPosts()

const menu = [
  { name: 'About', path: '/' },
  { name: 'Goods', path: '/' },
  { name: 'News', path: '/' }
]

const featuredPost = posts[0]
</script>

<template>
  <BPage title="Home">
    <AppHeader :menu="menu">
    </AppHeader>

    <AppHero
      :title="featuredPost.title"
      :description="retrieve(parseToText(featuredPost.body), 100, '...')"
      :onClickButton="() => router.push(featuredPost.slug)"
    />

    <LayoutTwoColumn class="layout">
      <template #main>
        <PostList />
      </template>
      <template #side-menu>
        <TagList />
      </template>

    </LayoutTwoColumn>
  </BPage>
</template>

<style lang="postcss" scoped>

</style>
