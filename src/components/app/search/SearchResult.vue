<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getTagFilteredPost } from '@/composables/Post'
import PostList from '@/components/app/post/PostList.vue'

const route = useRoute()
const tag = computed(() => route.query.tag ?? '')
const posts = computed(() => getTagFilteredPost(tag.value as any))
</script>

<template>
  <div class="search-keyword">
    <span class="tag">#{{ tag }}</span>
  </div>
  <PostList :posts="posts" />
</template>

<style lang="postcss" scoped>
.search-keyword {
  margin: 36px 56px 0;
  color: var(--color-accent);
  font-size: 32px;
}
</style>
