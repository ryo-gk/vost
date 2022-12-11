<script setup lang="ts">
import AppList from '@/components/parts/AppList.vue'
import PostListItem from '@/components/post/PostListItem.vue'
import { getPosts, Post } from '@/composables/Post'

defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <AppList :items="posts" class="PostList">
    <template #default="{ item: post }">
      <PostListItem v-bind="post" />
    </template>
  </AppList>
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
