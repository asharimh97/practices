const fs = require("fs");
const word = [
  "This is first line",
  "while this is second line"
]

fs.appendFile("written.txt", word, (err) => {
  if (err) {
    throw err;
  }

  console.log("Successfully written");
})