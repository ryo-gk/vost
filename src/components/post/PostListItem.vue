<script setup lang="ts">
import { computed } from 'vue'
import { retrieve, parseToText } from '@/composables/Content'
import AppTags from '@/components/AppTags.vue'

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

const description = computed(() => retrieve(parseToText(props.body), 150, '...'))

const _tags = computed(() => {
  return props.tags.map((tag) => {
    return {
      label: tag,
      onClick: () => {}
    }
  })
})
</script>

<template>
  <div class="PostListItem">
    <div class="date">
      {{ publishedAt }}
    </div>
    <div class="title">
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

  margin: 16px 0;
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
