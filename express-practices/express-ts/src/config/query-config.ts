import mysql from "mysql2";
import { DB_DBNAME, DB_HOST, DB_PASSWORD, DB_USERNAME } from "@constants/api";

const dbConfig: mysql.PoolOptions = {
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DBNAME,
  connectionLimit: 100,
  waitForConnections: true,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

const conn = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DBNAME,
});

const connect = () => {
  conn.connect((err) => {
    if (err) {
      console.error(err);
      setTimeout(connect, 2000);
    }
  });
};

export default pool;
