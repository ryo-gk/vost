<script setup lang="ts">
defineProps<{
  items: any[]
}>()
</script>

<template>
  <ul v-if="items.length > 0">
    <li v-for="(item, i) in items" :key="i">
      <slot :item="item" />
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
li {
  list-style-type: none;
}
</style>
