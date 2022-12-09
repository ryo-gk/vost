<script setup lang="ts">
import AppTag, { Tag } from '@/components/parts/AppTag.vue'
//import AppTag from '@/components/AppTag.vue'

const props = defineProps<{
  tags: Tag[]
}>()
</script>

<template>
  <div class="AppTags">
    <AppTag
      v-for="(tag, i) in tags"
      :key="i"
      :label="tag.label"
      :onClick="tag.onClick"
    />
  </div>
</template>

<style lang="postcss" scoped>
.AppTags {
  display: flex;
  flex-wrap: wrap;
}
</style>
