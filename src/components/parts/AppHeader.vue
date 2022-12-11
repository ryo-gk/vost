<script setup lang="ts">
export interface MenuItem {
  name: string
  path: string
}

defineProps<{
  menu?: MenuItem[]
}>()
</script>

<template>
  <div class="AppHeader">
    <div class="title">
      <a href="/">Vost</a>
    </div>

    <div class="menu">
      <ul class="items" v-if="menu?.length > 0">
        <li v-for="(item, i) in menu" :key="i" class="item">
        </li>
      </ul>
    </div>
  </div>
  <div class="dummy">
  </div>
</template>

<style lang="postcss" scoped>
.AppHeader {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 40px;
  border-bottom: 1px solid rgba(176, 0, 32, 0.3);
  color: #B00020;
  background-color: #ffffff;
}

.AppHeader,
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
