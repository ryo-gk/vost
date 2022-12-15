<script setup lang="ts">
import PostTags from '@/components/app/post/PostTags.vue'
</script>

<template>
  <div class="TagList">
    <h2 class="label">Tags</h2>
    <PostTags />
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
