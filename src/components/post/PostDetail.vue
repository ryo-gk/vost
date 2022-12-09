<script setup lang="ts">
import LayoutTwoColumn from '@/components/layout/LayoutTwoColumn.vue'
import PostDetailContent from '@/components/post/PostDetailContent.vue'
</script>

<template>
  <div class="PostDetail">
    <LayoutTwoColumn class="layout">
      <template #main>
        <PostDetailContent />
      </template>
      <template #side-menu>
      </template>
    </LayoutTwoColumn>
  </div>
</template>

<style lang="postcss" scoped>
.PostDetail {
  background-color: #f8e1e1;
}

.layout {
  padding: 32px;
}
</style>
