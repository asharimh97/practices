const express = require("express");
const app = express();
const PORT = 4000;

const fs = require("fs");

const Primus = require("primus");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  console.log("Accessed from client");
  res.json({ data: "Hello world", status: 200 });
})

// Create server
const server = require("http").createServer(app);
const primus = new Primus(server, {});

// Primus websocket
primus.on('connection', spark => {
  console.log("hello ws connection");

  // ini akan ketrigger ketika client ngasih `primus.write`
  spark.on("data", data => {
    console.log({ message: "retrieve data", data });
  })

  spark.on("data-baru", data => {
    console.log(data);
  })
});

primus.on("open", open => {
  console.log("the connection is opened, alive, kicking");
})

primus.on("disconnection", spark => {
  console.log("Uhh disconnected!");
});

// Create websocket from socket io
// const io = require("socket.io")(server, { cors: "*" });

// io.on("connection", socket => {
//   console.log("connect melalui websocket");
//   socket.on("data-baru", data => {
//     console.log(data);
//     io.emit("give-new-data", { data: "data baru telah dikirim" })
//   })
// });

server.listen(PORT, () => {
  console.log(`Listen app on http://localhost:${PORT}`);
  // fs.writeFile(__dirname + '/primus.js', primus.library(), err => {
  //   if (err) throw err;
  //   console.log("Saved!")
  // })
});