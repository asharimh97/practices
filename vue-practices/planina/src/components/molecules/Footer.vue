<template>
  <footer>
    <Container>
      <div class="footer__wrapper">
        <p class="copy">
          by
          <a
            href="https://iamashari.space"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ashari Muhammad H
          </a>
          . 2020
        </p>
        <div class="social-links">
          <a
            href="https://instagram.com/asharimh97"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ion-icon name="logo-instagram" />
          </a>
          <a
            href="https://twitter.com/asharimh97"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ion-icon name="logo-twitter" />
          </a>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from "../atoms/Container";

export default {
  name: "Footer",
  components: {
    Container
  }
};
</script>

<style scoped lang="scss">
footer {
  bottom: 0;
  margin: 40px 0;
  position: absolute;
  width: 100%;
}
.footer__wrapper {
  display: flex;
  justify-content: space-between;
}
.copy {
  color: rgb(255, 255, 255, 0.75);
  letter-spacing: 1px;
  margin: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(255, 255, 255);
  }

  a {
    color: inherit;
  }
}
.social-links {
  a {
    color: rgb(255, 255, 255, 0.75);
    font-size: 16px;
    margin-right: 24px;
    transition: all 0.3s ease-in-out;

    &:last-child {
      margin: 0;
    }

    &:hover {
      color: rgb(255, 255, 255);
    }
  }
}
</style>
