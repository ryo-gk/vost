<script setup lang="ts">
export interface Tag {
  label: string
  onClick: () => void
}

defineProps<Tag>()
</script>

<template>
  <li class="VostTag" @click="onClick">
    #{{ label }}
  </li>
</template>

<style lang="postcss" scoped>
.VostTag {
  margin: 4px 8px 4px 0;
  padding: 6px 24px;
  line-height: 10px;
  font-size: 10px;
  border-radius: 20px;
  color: #7d7c83;
  background-color: #f1f1f1;
  transition: background-color .25s;

  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
}
</style>
