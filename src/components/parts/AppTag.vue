<script setup lang="ts">
export interface Tag {
  label: string
  onClick: () => void
}

defineProps<Tag>()
</script>

<template>
  <div class="AppTag" @click="onClick">
    {{ label }}
  </div>
</template>

<style lang="postcss" scoped>
.AppTag {
  margin: 4px 0;
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

.AppTag + .AppTag {
  margin-left: 8px;
}
</style>
