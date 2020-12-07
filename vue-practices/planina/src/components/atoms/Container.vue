<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Container"
};
</script>
<style scoped lang="scss">
.container {
  display: block;
  margin: 0 40px;
  min-width: 1200px;
}
</style>
