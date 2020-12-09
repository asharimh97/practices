<template>
  <div class="list-card-mountain">
    <CardMountain
      location="Merapi"
      city="Yogyakarta"
      :is-active="true"
      image="/images/mountain-1.jpg"
    />
    <CardMountain
      location="Sumbing"
      city="Wonosobo"
      image="/images/mountain-2.jpg"
    />
    <CardMountain
      location="Prau"
      city="Wonosobo"
      image="/images/mountain-3.jpg"
    />
    <CardMountain
      location="Andong"
      city="Magelang"
      image="/images/mountain-4.jpg"
    />
  </div>
</template>
<script>
import CardMountain from "./CardMountain";
export default {
  name: "ListCardMountain",
  components: { CardMountain }
};
</script>
<style scoped lang="scss">
.list-card-mountain {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin-right: -40px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
