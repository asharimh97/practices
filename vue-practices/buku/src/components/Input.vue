<template>
  <div class="input-group">
    <label class="input-label">{{ label }}</label>
    <input 
      type="text" 
      class="input-form" 
      v-bind:value="data" 
      v-on:change="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    data: String
  }
}
</script>

<style lang="scss">
  .input-group {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: 300px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .input-label, .input-form {
    display: block;
  }

  .input-form {
    border: solid 1px #ccc;
    border-radius: 3px;
    height: 32px;
    margin-top: 8px;
    outline: none;
    width: 100%;
    padding: 8px;
  }
</style>



