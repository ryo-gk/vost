<script setup lang="ts">
import HomePage from '@/components/home/Home.vue'
import AppHeader from '@/components/parts/AppHeader.vue'
</script>

<template>
  <div>
    <AppHeader />
    <RouterView />
  </div>
</template>
