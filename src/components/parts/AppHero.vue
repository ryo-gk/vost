<script setup lang="ts">
defineProps<{
  title: string
  description: string
  onClickButton: () => void
}>()
</script>

<template>
  <div class="AppHero">
    <div class="content">
      <div class="main">
        <div class="title">
          {{ title }}
        </div>
        <div class="description">
          {{ description }}
        </div>
        <button class="button" @click="onClickButton">
          Start reading
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.AppHero {
  --hero-base-color: #f8e1e1;
  --hero-accent-color: #b00020;

  height: 320px;
  background-color: var(--hero-base-color);
}

.content {
  display: flex;
  height: 100%;
  padding: 0 56px;
}

.main {
  width: 70%;
  margin: 0 auto;
  padding-top: 80px;
}

.title {
  line-height: 40px;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--hero-accent-color);

  @media (min-width: 768px) {
    line-height: 60px;
    font-size: 48px;
  }
}

.description {
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 20px;
  line-height: 20px;
  color: var(--hero-accent-color);

  @media (min-width: 512px) {
    font-size: 24px;
    line-height: 32px;
  }
}

.button {
  height: 40px;
  padding: 0 48px;
  border-radius: 28px;
  color: #ffffff;
  background-color: var(--hero-accent-color);
  opacity: 1;
  transition: opacity .5s;

  &:hover {
    opacity: .7;
  }
}
</style>
