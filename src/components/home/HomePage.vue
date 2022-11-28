<script setup lang="ts">
import BPage from '@/components/parts/BPage.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppHero from '@/components/AppHero.vue'
import LayoutTwoColumn from '@/components/layout/LayoutTwoColumn.vue'
import PostList from '@/components/post/PostList.vue'

const menu = [
  { name: 'About', path: '/' },
  { name: 'Goods', path: '/' },
  { name: 'News', path: '/' }
]
</script>

<template>
  <BPage title="Home">
    <AppHeader :menu="menu">
    </AppHeader>

    <AppHero
      title="Why you can do more effort?"
      description="More effort you do, More confidence you get."
    />

    <LayoutTwoColumn class="layout">
      <template #side-menu>
        Side menu
      </template>
      <template #main>
        <PostList />
      </template>

    </LayoutTwoColumn>
  </BPage>
</template>

<style lang="postcss" scoped>
.layout {
  --width-side-menu: 300px;
}
</style>
