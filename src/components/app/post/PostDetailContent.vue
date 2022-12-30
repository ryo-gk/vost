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
    <div class="body markdown-content" v-html="post?.body" />
  </div>
</template>

<style lang="postcss" scoped>
.PostDetailContent {
  padding: 48px;
  background-color: var(--color-white);

  @media (min-width: 768px) {
    border-top: 1px solid var(--color-accent);
  }
}

.date {
  padding-bottom: 12px;
  font-size: 12px;
  color: var(--color-light-gray);
}

.title {
  font-size: 36px;
  font-weight: 600;
  font-family: var(--font-family--post-title);
}

.tags {
  padding-top: 16px;
}

.body {
  line-height: 28px;
  margin-top: 24px;
  letter-spacing: .3px;
  font-size: var(--font-size--detail-content_body);
  font-weight: 300;
  font-family: var(--font-family--content);
}
</style>
