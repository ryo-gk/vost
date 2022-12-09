<template>
  <div class="LayoutTwoColumn">

    <div class="main">
      <slot name="main" />
    </div>

    <div class="side-menu">
      <slot name="side-menu" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.LayoutTwoColumn {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.main {
  flex: 1;
}

.side-menu {
  width: 100%;

  @media (min-width: 768px) {
    width: 300px;
  }
}
</style>

