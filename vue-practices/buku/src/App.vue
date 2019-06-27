<template>
  <div id="app">
    <WelcomeMessage />
    <p>Jumlah tamu : {{ daftarTamu.length }}</p>
    <FormBukuTamu v-bind:dataForm="bukuTamuForm" v-bind:onSubmit="handleSubmitBukuTamu" />

    <DaftarTamu v-if="daftarTamu.length > 0" v-bind:tamuList="daftarTamu" />
  </div>
</template>

<script>
import WelcomeMessage from './components/WelcomeMessage.vue'
import FormBukuTamu from './components/FormBukuTamu.vue'
import DaftarTamu from './components/DaftarTamu.vue'

export default {
  name: 'app',
  components: {
    WelcomeMessage,
    FormBukuTamu,
    DaftarTamu
  },
  methods: {
    handleSubmitBukuTamu: function(){
      const { firstName, lastName, origin } = this.bukuTamuForm;
      const tamuBaru = {
        id: this.daftarTamu.length,
        firstName,
        lastName,
        origin
      };
      this.daftarTamu = [ ...this.daftarTamu, tamuBaru ];
    }
  },
  data: () =>  ({
    bukuTamuForm: {
      firstName: "",
      lastName: "",
      origin: ""
    },
    daftarTamu: [],
  })
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  align-items: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  margin-top: 60px;
  text-align: center;
}
</style>
