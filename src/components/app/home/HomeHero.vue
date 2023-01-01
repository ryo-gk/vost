<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getPosts, retrieve, parseToText, Post } from '@/composables/Post'

const router = useRouter()
const posts = getPosts()
const featuredPost = posts[0]

function retrieveText (post: Post) {
  return retrieve(parseToText(post.body), 100, '...')
}

function moveToPost() {
  router.push(`posts/${featuredPost.slug}`)
}
</script>

<template>
  <VostHero
    :title="featuredPost.title"
    :description="retrieveText(featuredPost)"
    background-image="/img/image-for-test.jpg"
    :on-click-button="moveToPost"
  />
</template>
