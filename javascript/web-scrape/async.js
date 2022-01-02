const rp = require("request-promise");
const url = "http://victori.semarangkota.go.id/info?tanggal=27-12-2021";
const cheerio = require("cheerio");
const fs = require("fs");

const cleanString = str => {
  return String(str).trim().replace(/[\r\n]+/g," ");
}

(async () => {
  const data = await rp(url);

  if (data) {
    const hoho = cheerio.load(data);
    const allData = hoho("option");

    const parsedData = [];
    allData
      .map((i, el) => {
        console.log(el.children.length > 0 && el.children[0].data)
      })

      console.log(parsedData)
  } else {
    console.error({
      error: "Error ini gan huhuhu"
    })
  }
})();
