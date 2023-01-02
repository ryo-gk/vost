<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { config } from 'virtual:config'
import { useFavicon, useOGP } from '@/composables/Head'
import { useHead } from '@vueuse/head'

const props = defineProps<{
  title: string,
  description?: string
  image?: string
  type?: 'website' | 'blog' | 'article'
}>()

const route = useRoute()

const title = computed(() => props.title ? `${props.title} | ${config.name}` : config.name)

const favicon = useFavicon()

const ogp = useOGP({
  siteName: config.name,
  title: title.value,
  description: props.description ?? config.description,
  url: location.origin + route.fullPath,
  image: props.image ?? config.image,
  type: props.type ?? 'blog'
})

useHead({
  link: favicon.link,
  ...ogp,
  title
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
