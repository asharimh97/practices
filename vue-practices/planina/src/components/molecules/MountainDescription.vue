<template>
  <div class="mountain-description">
    <div class="mountain-description__divider" />
    <p class="mountain-description__city">
      {{ city }}
    </p>
    <h1 class="mountain-description__location">
      {{ mount }}
    </h1>
    <p class="mountain-description__description">
      {{ description }}
    </p>
    <a href="#" class="mountain-description__explore">
      Explore

      <div class="mountain-description__explore__icons">
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "MountainDescription",
  props: {
    city: {
      type: String,
      default: "Wonosobo"
    },
    mount: {
      type: String,
      default: "Kembang"
    },
    description: {
      type: String,
      default: `Nulla potenti ante vel sit suspendisse sit. 
                Purus erat tellus aenean nibh imperdiet morbi elementum 
                nunc. Ipsum nec netus elit, proin mattis at. 
                Ullamcorper amet, malesuada ornare tortor vivamus sagittis.`
    }
  }
};
</script>
<style scoped lang="scss">
.mountain-description {
  padding-top: 64px;
  text-align: left;
}
.mountain-description__divider {
  background: var(--white);
  height: 3px;
  width: 50px;
}
.mountain-description__city {
  color: var(--white);
  font-size: 20px;
  font-weight: var(--semibold);
  letter-spacing: 3px;
  line-height: 1.75;
  text-transform: uppercase;
}
.mountain-description__location {
  color: var(--white);
  font-size: 96px;
  letter-spacing: 3px;
  line-height: 131px;
  margin: 0;
  text-transform: uppercase;
}
.mountain-description__description {
  color: var(--white);
  font-size: 16px;
  font-weight: var(--light);
  letter-spacing: 0.75px;
  line-height: 1.75;
  max-width: 65ch;
  margin-bottom: 24px;
}
.mountain-description__explore {
  align-items: center;
  color: var(--white);
  display: flex;
  font-size: 20px;
  font-weight: var(--medium);
  justify-content: space-between;
  letter-spacing: 3px;
  line-height: 27px;
  text-decoration: none;
  text-transform: uppercase;
  width: 178px;

  .mountain-description__explore__icons {
    padding: 4px 0 0;

    ion-icon {
      margin: 0 -6px;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease-in-out;
    }
  }

  &:hover {
    .mountain-description__explore__icons {
      ion-icon {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
}
</style>
