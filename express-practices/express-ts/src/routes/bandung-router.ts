/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import StatusCodes from "http-status-codes";
import { Router, Request, Response } from "express";
import mysql from "mysql2";

import auth from "@shared/auth";

// Constants
const router = Router();
const { OK } = StatusCodes;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "strapi",
});

// Routes/paths
const routes = {
  getBandung: "/",
  getLautanApi: "/lautan-api",
  getPriangan: "/priangan",
  getConnect: "/connect",
};

router.use(auth);

router.get(routes.getBandung, (_: Request, res: Response) => {
  res.status(OK).json({
    message: "Hello from Bandung",
    data: {},
  });
});

router.get(routes.getLautanApi, (_: Request, res: Response) => {
  res.status(OK).json({
    message: "Bandung lautan api",
    data: {
      chant: "Mari bung rebut kembali",
    },
  });
});

router.get(routes.getPriangan, (_: Request, res: Response) => {
  res.status(OK);
  res.json({
    message: "Hohoho",
  });
  res.end();
});

router.get(routes.getConnect, (_: Request, res: Response) => {
  connection.connect();

  const query = `
    SELECT PersonID as ID, FirstName as first_name,
    LastName as last_name, CONCAT(Address, ', ', City) as address 
    FROM Persons
  `;

  connection.query(query, function (error, results) {
    if (error) throw error;
    res.status(OK).json({
      message: "Connected to database",
      data: {
        results,
      },
    });
  });
  connection.end();
});

export default router;
