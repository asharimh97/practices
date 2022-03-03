import "dotenv/config";

export const JWT_SECRET = process.env.JWT_SECRET || "";
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "";
export const DB_HOST = process.env.DB_HOST || "";
export const DB_USERNAME = process.env.DB_USERNAME || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_DBNAME = process.env.DB_DBNAME || "";
