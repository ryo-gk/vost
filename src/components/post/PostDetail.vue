<script setup lang="ts">
import LayoutTwoColumn from '@/components/layout/LayoutTwoColumn.vue'
import PostDetailContent from '@/components/post/PostDetailContent.vue'
import TagList from '@/components/tag/TagList.vue'
</script>

<template>
  <div class="PostDetail">
    <LayoutTwoColumn class="layout">
      <template #main>
        <PostDetailContent />
      </template>
      <template #side-menu>
        <div class="side-menu">
          <TagList />
        </div>
      </template>
    </LayoutTwoColumn>
  </div>
</template>

<style lang="postcss" scoped>
.PostDetail {
  background-color: var(--color-main);
}

.layout {
  margin: 0 auto;
  padding: 32px;
}

.side-menu {
  margin: 0 16px;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-accent);
}
</style>
