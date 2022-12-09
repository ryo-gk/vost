<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import { retrieve, parseToText } from '@/composables/Post'
import AppTags from '@/components/parts/AppTags.vue'
import { useRouter } from 'vue-router'

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

const _tags = computed(() => {
  return props.tags.map((tag) => {
    return {
      label: tag,
      onClick: () => {}
    }
  })
})

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
      <AppTags :tags="_tags" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.PostListItem {
  --post-accent-color: #b00020;

  padding: 8px 32px;
  border-left: 1px solid var(--post-accent-color);
}

.date {
  font-size: 12px;
  line-height: 16px;
  color: #7D7C83;
}

.title {
  margin: 8px 0;
  font-size: 26px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
}

.description {
  font-size: 16px;
  line-height: 20px;
  color: #7D7C83;
}

.tags {
  margin-top: 8px;
}
</style>
