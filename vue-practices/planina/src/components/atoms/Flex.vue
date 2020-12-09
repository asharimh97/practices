<template>
  <div class="flex">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Flex"
};
</script>
<style scoped lang="scss">
.flex {
  align-items: center;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
