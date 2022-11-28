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
}

.main {
  max-width: 800px;
}

.side-menu {
  width: auto;
}
</style>

