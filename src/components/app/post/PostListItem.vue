<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { retrieve, parseToText, createTags } from '@/composables/Post'
import VostTags from '@/components/support/parts/VostTags.vue'

const props = defineProps<{
  title: string
  slug: string
  status: 'draft' | 'published'
  tags: string[]
  image: string
  body: string
  path: string
  publishedAt: Date
}>()

const router = useRouter()

const description = computed(() => retrieve(parseToText(props.body), 150, '...'))

const _tags = computed(() => createTags(props.tags))

function onClickTitle() {
  router.push(`/posts/${props.slug}`)
}
</script>

<template>
  <div class="PostListItem">
    <div class="date">
      {{ dayjs(publishedAt).format('MMM DD, YYYY') }}
    </div>
    <div class="title" @click="onClickTitle">
      {{ title }}
    </div>
    <div class="description">
      {{ description }}
    </div>
    <div class="tags">
      <VostTags :tags="_tags" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.PostListItem {
  --post-color-accent: var(--color-accent);

  padding: 8px 32px;
  border-left: 1px solid var(--post-color-accent);
}

.date {
  font-size: 12px;
  line-height: 16px;
  color: var(--color-light-gray);
}

.title {
  margin: 8px 0;
  font-size: 20px;
  font-weight: 600;
  font-family: var(--font-family--post-title);

  &:hover {
    cursor: pointer;
  }
}

.description {
  line-height: 20px;
  color: var(--color-light-black);
  font-size: 16px;
  font-family: var(--font-family--content);
}

.tags {
  margin-top: 8px;
}
</style>
