<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tag = computed(() => route.query.tag ?? '')
const title = computed(() => `The posts about ${tag.value}`)
</script>

<template>
  <VostPage :title="title">
    <slot />
  </VostPage>
</template>
