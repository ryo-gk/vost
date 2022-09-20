<script setup lang="ts">
  import { getContent } from "../../composables/Content";

  const posts = getContent([
    d => d.status === 'published'
  ])
</script>

<template>
  <ul v-if="posts.length > 0">
    <li v-for="(post, i) in posts" :key="i">
      <slot :post="post" />
    </li>
  </ul>
</template>
