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
        <div class="actions">
          <button class="button" @click="onClickButton">
            Start reading
          </button>
        </div>
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
  padding: 0 32px;

  background: v-bind(image);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    padding: 0 56px;
  }
}

.main {
  max-width: 800px;
  padding-top: 80px;
}

.title {
  line-height: 36px;
  letter-spacing: 0;
  font-size: 36px;
  font-weight: 600;
  font-family: var(--font-family--post-title);
  color: var(--hero-color-accent);
  background-color: rgba(255,255,255,0.6);
  padding: 4px 16px;

  @media (min-width: 768px) {
    line-height: 60px;
    font-size: 48px;
  }
}

.description {
  padding-top: 12px;
  padding-bottom: 16px;
  line-height: 20px;
  color: var(--hero-color-accent);
  font-size: 20px;
  font-family: var(--font-family--content);
  background-color: rgba(255,255,255,0.6);
  padding: 4px 16px;
  margin: 16px 0;

  @media (min-width: 512px) {
    line-height: 32px;
    font-size: 24px;
  }
}

.actions {
  display: flex;
  justify-content: center;

  @media (min-width: 512px) {
    justify-content: flex-start;
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
