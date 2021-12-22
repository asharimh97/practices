const fs = require("fs");

const fileData = fs.readFileSync("./log-parsed.txt", "utf-8");
const textPerLine = fileData.split("\n");

console.log(textPerLine);
