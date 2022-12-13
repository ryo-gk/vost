<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LayoutTwoColumn from '@/components/layout/LayoutTwoColumn.vue'
import PostList from '@/components/post/PostList.vue'
import TagList from '@/components/tag/TagList.vue'
import { getTagFilteredPost } from '@/composables/Post'

const route = useRoute()
const tag = computed(() => route.query.tag ?? '')
const posts = computed(() => getTagFilteredPost(tag.value as any))
</script>

<template>
  <LayoutTwoColumn class="layout">
    <template #main>
      <div class="search-keyword">
        <span class="tag">#{{ tag }}</span>
      </div>
      <PostList :posts="posts" />
    </template>
    <template #side-menu>
      <TagList />
    </template>
  </LayoutTwoColumn>
</template>

<style lang="postcss" scoped>
.search-keyword {
  margin: 36px 56px 0;
  color: var(--color-accent);
  font-size: 32px;
}
</style>
