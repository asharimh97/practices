<template>
  <MainContent>
    <Container>
      <MountainDescription />
    </Container>
  </MainContent>
</template>
<script>
import MainContent from "../atoms/MainContent";
import MountainDescription from "../molecules/MountainDescription";
import Container from "../atoms/Container";

export default {
  name: "Home",
  components: {
    MainContent,
    MountainDescription,
    Container
  }
};
</script>
