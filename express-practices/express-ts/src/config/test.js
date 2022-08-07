require("dotenv").config();
const mysql = require("mysql2");
const ip = require("ip");

const DB_HOST = process.env.DB_HOST || "";
const DB_USERNAME = process.env.DB_USERNAME || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_DBNAME = process.env.DB_DBNAME || "";

const conn = mysql.createConnection({
  host: "reachout.id",
  user: "reachout_stage_backoffice",
  password: "Backoffice123",
  database: DB_DBNAME,
  port: 3306,
});

const connect = () => {
  conn.connect((err) => {
    if (err) {
      console.error(err);
      setTimeout(connect, 2000);
    } else {
      console.log("Connected");
    }
  });
};

connect();

console.log(ip.address());
