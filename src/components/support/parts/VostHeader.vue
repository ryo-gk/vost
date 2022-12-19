<script setup lang="ts">
export interface MenuItem {
  name: string
  path: string
}

defineProps<{
  title: string
  menu?: MenuItem[]
}>()
</script>

<template>
  <div class="VostHeader">
    <div class="title">
      <a href="/">{{ title }}</a>
    </div>

    <div class="menu">
      <ul v-if="menu && menu?.length > 0" class="items">
        <li v-for="(item, i) in menu" :key="i" class="item" />
      </ul>
    </div>
  </div>
  <div class="dummy" />
</template>

<style lang="postcss" scoped>
.VostHeader {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 40px;
  border-bottom: 1px solid var(--color-accent--lighten-2);
  color: var(--color-accent);
  background-color: var(--color-white);
  z-index: var(--z-index-header);
}

.VostHeader,
.dummy {
  height: 80px;
}

.title {
  font-size: 32px;
}

.items {
  display: flex;
}
</style>
