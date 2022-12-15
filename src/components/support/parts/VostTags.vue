<script setup lang="ts">
import VostTag, { Tag } from '@/components/support/parts/VostTag.vue'

defineProps<{
  tags: Tag[]
}>()
</script>

<template>
  <ul class="VostTags">
    <VostTag
      v-for="(tag, i) in tags"
      :key="i"
      :label="tag.label"
      :on-click="tag.onClick"
    />
  </ul>
</template>

<style lang="postcss" scoped>
.VostTags {
  display: flex;
  flex-wrap: wrap;
}
</style>
