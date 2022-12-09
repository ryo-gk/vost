<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { useSiteConfig } from '@/composables/Site'

const props = defineProps<{
  title?: string
}>()

const site = useSiteConfig()

useTitle(props.title ? `${props.title} | ${site.name}` : site.name)
</script>

<template>
  <div>
    <slot />
  </div>
</template>
