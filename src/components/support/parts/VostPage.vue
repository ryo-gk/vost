<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { config } from 'virtual:config'
import { useOGP } from '@/composables/Head'
import { useHead } from '@vueuse/head'

const props = defineProps<{
  title: string,
  description?: string
  image?: string
  type?: 'website' | 'blog' | 'article'
}>()

const route = useRoute()

const title = computed(() => props.title ? `${props.title} | ${config.name}` : config.name)

const ogp = useOGP({
  siteName: config.name,
  title: title.value,
  description: props.description ?? config.description,
  url: location.origin + route.fullPath,
  image: props.image ?? config.image,
  type: props.type ?? 'blog'
})


useHead({
  ...ogp,
  title
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
