<template>
  <main class="main-content">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: "MainContent"
};
</script>
<style scoped lang="scss">
.main-content {
  align-items: center;
  display: flex;
  min-height: calc(100vh - 210px);
  padding-top: 105px;
  position: relative;
  z-index: 5;
}
</style>
