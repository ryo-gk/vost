<script setup lang="ts">
import { useRoute } from 'vue-router'
import VostTags from '@/components/support/parts/VostTags.vue'
import { createTags, getPost } from '@/composables/Post'

const route = useRoute()

const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const post = getPost(slug)

const tags = createTags(post?.tags ?? [])
</script>

<template>
  <div class="PostDetailContent">
    <div class="date">
      {{ post?.publishedAt }}
    </div>
    <div class="title">
      {{ post?.title ?? '' }}
    </div>
    <div class="tags">
      <VostTags :tags="tags" />
    </div>
    <div class="body" v-html="post?.body" />
  </div>
</template>

<style lang="postcss" scoped>
.PostDetailContent {
  padding: 48px;
  border-top: 1px solid var(--color-accent);
  background-color: var(--color-white);
}

.date {
  padding-bottom: 12px;
  font-size: 12px;
  color: var(--color-light-gray);
}

.title {
  font-size: 36px;
}

.tags {
  padding-top: 16px;
}

.body {
  line-height: 30px;
  margin-top: 24px;
  letter-spacing: .4px;
  font-family: "Helvetica";
  font-size: 20px;
  font-weight: 300;

  :deep(h1) {
      font-size: 28px;
      margin: 24px 0 8px;
  }

  :deep(h2) {
      font-size: 24px;
      margin: 16px 0 4px;
  }
}
</style>
