const rp = require("request-promise");
const url = "http://victori.semarangkota.go.id/info";
const cheerio = require("cheerio");
const fs = require("fs");

const cleanString = str => {
  return String(str).trim().replace(/[\r\n]+/g," ");
}

rp(url)
  .then((html) => {
    const hoho = cheerio.load(html);
    const allData = hoho("tr");

    const parsedData = [];
    allData
      .map((i, el) => {
        if (i !== 0) {
          const parsed = el.children
            .filter(col => col.type === "tag")
            .map(col => col.children && col.children[0] && cleanString(col.children[0].data));
          // console.log(parsed)
          parsedData.push(parsed.join());
        }
      })

      // console.log(parsedData)

    fs.appendFile("log-parsed.txt", parsedData.join("\n"), (err) => {
      if (err) {
        throw err;
      }

      console.log("Saved");
    })
  })
  .catch((err) => {
    console.error(err);
  })