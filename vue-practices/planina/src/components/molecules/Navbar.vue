<template>
  <header class="navbar">
    <Container>
      <nav class="navigation">
        <a href="/" class="navigation__brand"> Planina </a>

        <p class="navigation__profile">
          Howdy, {{ username }} <ion-icon name="person" />
        </p>
      </nav>
    </Container>
  </header>
</template>
<script>
import Container from "../atoms/Container";

export default {
  name: "Navbar",
  components: {
    Container
  },
  props: {
    username: {
      type: String,
      default: "Antelope"
    }
  }
};
</script>
<style lang="scss">
.navbar {
  padding: 40px 0;
  position: fixed;
  width: 100%;
}
.navigation {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.navigation__brand {
  color: var(--white);
  font-size: 20px;
  font-weight: var(--medium);
  letter-spacing: 5px;
  line-height: 27px;
  text-transform: uppercase;
  text-decoration: none;
}
.navigation__profile {
  color: var(--white);
  font-size: 16px;
  font-weight: var(--medium);
  letter-spacing: 2px;
  line-height: 22px;
  margin: 0;

  ion-icon {
    margin-left: 16px;
  }
}
</style>
