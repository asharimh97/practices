<template>
  <div :title="`${id} lorem ipsum dolorsit amet`">
    Halo ini component sembarangan {{ name ? name : "kosong ges" }}
  </div>
  <div>
    {{ message }}
  </div>
  <button v-on:click="handleChangeMessage">
    Change the message buddy!
  </button>
</template>
<script>
const alternateNames = [
  "Ipsum lorem dolorsit amet",
  "habeda habeda habeda",
  "ini nama yang lain",
  "apakah kamu kepikiran ide nama lainnya kawan",
  "kalo ini gimana ges"
];

export default {
  name: "Sembarang",
  data: () => ({
    message: "Lorem ipsum dolorsit amet"
  }),
  props: ['name', 'id'],
  methods: {
    handleChangeMessage() {
      const randomIndex = Math.round(Math.random() * 100) % alternateNames.length;
      const newMessage = alternateNames[randomIndex];

      this.message = newMessage;
    }
  }
}
</script>
<style>
  
</style>