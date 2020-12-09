<template>
  <MainContent>
    <Container>
      <div class="content-wrapper">
        <MountainDescription />
        <ListCardMountain />
      </div>
    </Container>
  </MainContent>
</template>
<script>
import MainContent from "../atoms/MainContent";
import MountainDescription from "../molecules/MountainDescription";
import Container from "../atoms/Container";
import ListCardMountain from "../molecules/ListCardMountain";

export default {
  name: "Home",
  components: {
    MainContent,
    MountainDescription,
    Container,
    ListCardMountain
  }
};
</script>
<style lang="scss" scoped>
.content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
}
</style>
