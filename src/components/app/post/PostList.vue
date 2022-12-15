<script setup lang="ts">
import VostList from '@/components/support/parts/VostList.vue'
import PostListItem from '@/components/app/post/PostListItem.vue'
import { Post } from '@/composables/Post'

defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <VostList :items="posts" class="PostList">
    <template #default="{ item: post }">
      <PostListItem v-bind="post" />
    </template>
  </VostList>
</template>

<style lang="postcss" scoped>
.PostList {
  --list-gap: 16px;

  padding: 32px 56px;
}

.PostList + .PostList {
  margin-top: 16px;
}
</style>
