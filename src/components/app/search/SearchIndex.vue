<script setup lang="ts">
import TagList from '@/components/app/tag/TagList.vue'
import SearchPage from './SearchPage.vue'
import SearchResult from './SearchResult.vue'
</script>

<template>
  <SearchPage>
    <LayoutTwoColumn class="layout">
      <template #main>
        <SearchResult />
      </template>
      <template #side-menu>
        <TagList />
      </template>
    </LayoutTwoColumn>
  </SearchPage>
</template>
