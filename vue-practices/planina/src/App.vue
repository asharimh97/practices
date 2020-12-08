<template>
  <div>
    <div class="background" />
    <Navbar />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
import Home from "./components/organisms/Home";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Home
  }
};
</script>

<style lang="scss">
:root {
  --white: #fff;
  --black: #000;
  --dark-grey: #666;

  /* Font weight */
  --light: 300;
  --regular: 400;
  --medium: 500;
  --semibold: 600;
  --bold: 700;
  --extrabold: 800;
}
* {
  box-sizing: border-box;
}

html,
body {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  left: 0;
  margin: 0;
  padding: 0;
  top: 0;
}
.background {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("/images/mountain.jpg");
  background-position: center;
  background-size: cover;
  height: 100%;
  position: fixed;
  width: 100%;
}
</style>
