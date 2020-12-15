const fullPage = new fullpage("#fullpage", {
  // write options here
  scrollBar: true,
  // set content vertically cented by default
  verticalCentered: true,
  // navigation
  navigation: true,
  navigationPosition: "left",
});

// Animate on scroll
AOS.init();