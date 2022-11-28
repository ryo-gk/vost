<script setup lang="ts">
import BList from '@/components/parts/BList.vue'
import PostListItem from '@/components/post/PostListItem.vue'
import { getPosts } from '@/composables/Post'

const posts = getPosts()
</script>

<template>
  <BList :items="posts" class="PostList">
    <template #default="{ item: post }">
      <PostListItem v-bind="post" />
    </template>
  </BList>
</template>

<style lang="postcss" scoped>
.PostList {
  width: 800px;
  padding: 32px 80px;
}
</style>
