<script setup lang="ts">
export interface Tag {
  label: string
  onClick: () => void
}

defineProps<Tag>()
</script>

<template>
  <span class="AppTag" @click="onClick">
    {{ label }}
  </span>
</template>

<style lang="postcss" scoped>
.AppTag {
  padding: 6px 24px;
  border-radius: 20px;
  font-size: 10px;
  color: #7d7c83;
  background-color: #f1f1f1;
  transition: background-color .25s;

  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
}

.AppTag + .AppTag {
  margin-left: 8px;
}
</style>
