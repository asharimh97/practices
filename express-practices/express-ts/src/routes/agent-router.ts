/* eslint-disable @typescript-eslint/no-unsafe-call */
import StatusCodes from "http-status-codes";
import { Router, Request, Response } from "express";
import mysql from "mysql2";

// Constants
const router = Router();
const { OK } = StatusCodes;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "agents",
});

const routes = {
  all: "/",
  add: "/add",
  update: "/update/:id",
  search: "/search",
  delete: "/delete/:id",
  detail: "/agent/:id",
};
connection.connect();

router.get(routes.all, (_: Request, res: Response) => {
  const query = `
    SELECT AGENT_CODE as agent_code, TRIM(AGENT_NAME) as name,
    TRIM(WORKING_AREA) as area, COMMISSION as commission,
    TRIM(PHONE_NO) as phone, COUNTRY as country 
    FROM agents
  `;

  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.status(OK).json({
      message: "Successfully get all agents",
      data: results,
    });
  });

  // connection.end();
});

router.get(routes.detail, (req: Request, res: Response) => {
  const query = `
    SELECT AGENT_CODE as agent_code, TRIM(AGENT_NAME) as name,
    TRIM(WORKING_AREA) as area, COMMISSION as commission,
    TRIM(PHONE_NO) as phone, COUNTRY as country 
    FROM agents WHERE AGENT_CODE = ?
  `;

  connection.query(query, [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.status(OK).json({
      message: "Successfully get agent",
      data: results,
    });
  });

  // connection.end();
});

router.get(routes.search, (req: Request, res: Response) => {
  const { name = "" } = req.query;

  const query = `
    SELECT AGENT_CODE as agent_code, TRIM(AGENT_NAME) as name,
    TRIM(WORKING_AREA) as area, COMMISSION as commission,
    TRIM(PHONE_NO) as phone, COUNTRY as country 
    FROM agents WHERE AGENT_NAME LIKE ?
  `;

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  connection.query(query, [`%${name}%`], function (error, results, fields) {
    if (error) throw error;
    res.status(OK).json({
      message: "Successfully search agent",
      data: results,
    });
  });

  // connection.end();
});

router.post(routes.add, (req: Request, res: Response) => {
  const { code, name, area, commission, phone, country } = req.body;

  const query = `
    INSERT INTO agents (AGENT_CODE, AGENT_NAME, WORKING_AREA, COMMISSION,
    PHONE_NO, COUNTRY) VALUES (?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    query,
    [code, name, area, commission, phone, country],
    function (error, results, fields) {
      if (error) throw error;
      res.status(OK).json({
        message: "Successfully add agent",
        data: {},
      });
    },
  );
});

export default router;
