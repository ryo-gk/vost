<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppPage from '@/components/parts/AppPage.vue'
import Search from '@/components/search/Search.vue'

const route = useRoute()
const tag = computed(() => route.query.tag ?? '')
const title = computed(() => `The posts about ${tag.value}`)
</script>

<template>
  <AppPage :title="title">
    <Search />
  </AppPage>
</template>
