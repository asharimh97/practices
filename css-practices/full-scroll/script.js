const fullPage = new fullpage("#fullpage", {
  scrollBar: false,
  // set content vertically cented by default
  verticalCentered: true,
  // navigation
  navigation: true,
  navigationPosition: "left",
  navigationTooltips: [...new Array(5)].map((_, i) => `${i + 1}th Slide`),
  showActiveTooltip: true,

  parallax: true,
});

console.log(fullPage)