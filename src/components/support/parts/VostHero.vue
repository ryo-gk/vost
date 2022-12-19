<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  backgroundImage?: string
  onClickButton: () => void
}>()

const image = computed(() => (`url(${props.backgroundImage})`))
</script>

<template>
  <div class="VostHero">
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
.VostHero {
  --hero-color-background: var(--color-main);
  --hero-color-accent: var(--color-accent);
  --hero-color-accent--hover: var(--color-accent--lighten-1);

  height: 320px;
  background-color: var(--hero-color-background);
}

.content {
  display: flex;
  height: 100%;
  padding: 0 56px;

  background-image: v-bind(image);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.main {
  max-width: 800px;
  padding-top: 80px;
}

.title {
  line-height: 40px;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--hero-color-accent);

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
  color: var(--hero-color-accent);

  @media (min-width: 512px) {
    font-size: 24px;
    line-height: 32px;
  }
}

.button {
  height: 40px;
  padding: 0 48px;
  border-radius: 28px;
  color: var(--color-white);
  background-color: var(--hero-color-accent);
  transition: background-color .5s;

  &:hover {
    background-color: var(--hero-color-accent--hover);
  }
}
</style>
