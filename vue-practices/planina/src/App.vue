<template>
  <div>
    <div id="app">Welcome to vue app baby! <ion-icon name="heart" /></div>
    <Sembarang> Ini konten sembarang kawankuh </Sembarang>
  </div>
</template>

<script>
import Sembarang from "./components/Sembarang";
export default {
  name: "App",
  components: {
    Sembarang
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
