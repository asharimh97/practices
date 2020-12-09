<template>
  <div class="card-mountain" :class="{ 'card-mountain--active': isActive }">
    <div class="card-mountain__image">
      <img :src="image" :alt="location" />
    </div>
    <div class="card-mountain__overlay" />
    <div class="card-mountain__content">
      <p class="card-mountain__city">
        {{ city }}
      </p>
      <p class="card-mountain__location">
        {{ location }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardMountain",
  props: {
    city: {
      type: String,
      default: "Wonosobo"
    },
    location: {
      type: String,
      default: "Kembang"
    },
    image: {
      type: String,
      default: "/images/mountain.jpg"
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped lang="scss">
.card-mountain {
  border-radius: 10px;
  cursor: pointer;
  flex: 0 0 auto;
  height: 380px;
  margin-right: 24px;
  position: relative;
  width: 255px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &.card-mountain--active {
    .card-mountain__overlay {
      opacity: 1;
    }
  }

  &.card-mountain--active {
    margin-left: 20px;
    margin-right: 32px;
    transform: scale(1.1);
  }
}
.card-mountain__image {
  height: 100%;
  position: relative;
  width: 100%;

  & > img {
    border-radius: 10px;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    width: 100%;
  }
}
.card-mountain__overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  border-radius: 10px;
  height: 100%;
  left: 0;
  opacity: 0.7;
  position: absolute;
  top: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
}
.card-mountain__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  left: 0;
  top: 0;
  padding: 20px;
  position: absolute;
  width: 100%;

  p {
    margin: 0;
    color: var(--white);
    text-transform: uppercase;
  }

  .card-mountain__city {
    font-size: 13px;
    line-height: 18px;
  }

  .card-mountain__location {
    font-size: 32px;
    font-weight: var(--extrabold);
    line-height: 44px;
  }
}
</style>
