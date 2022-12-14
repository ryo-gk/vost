<script setup lang="ts">
import { computed } from 'vue'
import { createTags, getTags } from '@/composables/Post'
import AppTags from '@/components/parts/AppTags.vue'

const _tags = computed(() => createTags(getTags()))
</script>

<template>
  <div class="TagList">
    <h2 class="label">Tags</h2>
    <AppTags :tags="_tags" />
  </div>
</template>

<style lang="postcss" scoped>
.TagList {
  padding: 36px 48px;

  @media (min-width: 768px) {
    padding: 48px 16px;
  }
}

.label {
  font-size: 20px;
  margin-bottom: 16px;
}
</style>
