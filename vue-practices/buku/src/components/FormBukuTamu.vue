<template>
  <div>
    <form v-on:submit.prevent="onSubmit" v-on:submit.exact="onSubmit">
      <Input label="Nama depan" v-model="dataForm.firstName" />
      <Input label="Nama belakang" v-model="dataForm.lastName" />
      <Input label="Asal" v-model="dataForm.origin" />

      <button type="submit" class="btn btn-fluid btn-success" v-on:click.prevent="onSubmit">Catat</button>
    </form>
  </div>
</template>

<script>
import Input from './Input.vue'



export default {
  name: 'FormBukuTamu',
  props: {
    onSubmit: Function,
    dataForm: Object
  },
  components: {
    Input
  }
}
</script>

<style lang="scss">
  .btn {
    border: solid 1px #ccc;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    height: 32px;
    padding: 8px;

    &.btn-fluid {
      width: 100%;
    }

    &.btn-success {
      background-color: lightgreen;
      border-color: green;
      color: #333;
    }
  }
</style>

