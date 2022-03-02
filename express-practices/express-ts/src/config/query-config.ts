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

export default pool;
