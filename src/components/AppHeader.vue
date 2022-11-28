<script setup lang="ts">
export interface MenuItem {
  name: string
  path: string
}

defineProps<{
  menu: MenuItem[]
}>()
</script>

<template>
  <div class="AppHeader">
    <div class="title">
      Vite Blogger
    </div>

    <div class="menu">
      <ul class="items" v-if="menu.length > 0">
        <li v-for="(item, i) in menu" :key="i" class="item">
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.AppHeader {
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 40px;
  color: #B00020;
  background-color: #ffffff;
}

.title {
  font-size: 32px;
}

.items {
  display: flex;
}
</style>
