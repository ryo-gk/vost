<script setup lang="ts">
import PostDetailContent from '@/components/app/post/PostDetailContent.vue'
import TagList from '@/components/app/tag/TagList.vue'
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
  padding: 0;

  @media (min-width: 768px) {
    border-top: none;
    padding: 32px;
  }
}

.side-menu {
  margin: 32px 0;
  background-color: var(--color-white);

  @media (min-width: 768px) {
    margin: 0 16px;
    border-top: 1px solid var(--color-accent);
  }
}
</style>
