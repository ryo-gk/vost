<script setup lang="ts">
import { computed } from 'vue'
import { getTags } from '@/composables/Post'
import AppTags from '@/components/AppTags.vue'

const tags = getTags()

const _tags = computed(() => tags.map(tag => ({
  label: tag,
  onClick: () => {}
})))

console.log(_tags)
</script>

<template>
  <div class="TagList">
    <h2 class="label">Tags</h2>
    <AppTags :tags="_tags" />
  </div>
</template>

<style lang="postcss" scoped>
.TagList {
  padding: 48px 16px;
}

.label {
  font-size: 20px;
}
</style>
