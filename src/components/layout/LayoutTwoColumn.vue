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

.side-menu {
  min-width: 200px;
}

.main {
  max-width: 100%;
}
</style>

