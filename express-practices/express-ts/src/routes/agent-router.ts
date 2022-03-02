/* eslint-disable @typescript-eslint/no-unsafe-call */
import StatusCodes from "http-status-codes";
import { Router, Request, Response } from "express";
import connection from "@config/query-config";

// Constants
const router = Router();
const { OK, INTERNAL_SERVER_ERROR } = StatusCodes;

const routes = {
  all: "/",
  add: "/add",
  update: "/update/:id",
  search: "/search",
  delete: "/delete/:id",
  detail: "/agent/:id",
};

router.get(routes.all, (_: Request, res: Response) => {
  const query = `
    SELECT AGENT_CODE as agent_code, TRIM(AGENT_NAME) as name,
    TRIM(WORKING_AREA) as area, COMMISSION as commission,
    TRIM(PHONE_NO) as phone, COUNTRY as country 
    FROM agents WHERE active = 1
  `;

  connection.query(query, (err, results) => {
    if (err) {
      return res.status(INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
      });
    }

    res.status(OK).json({
      message: "Successfully get all agents",
      data: results,
    });
  });
});

router.get(routes.detail, (req: Request, res: Response) => {
  const query = `
    SELECT AGENT_CODE as agent_code, TRIM(AGENT_NAME) as name,
    TRIM(WORKING_AREA) as area, COMMISSION as commission,
    TRIM(PHONE_NO) as phone, COUNTRY as country 
    FROM agents WHERE AGENT_CODE = ? AND active = 1
  `;

  connection.query(query, [req.params.id], function (error, results) {
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
    FROM agents WHERE AGENT_NAME LIKE ? AND active = 1
  `;

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  connection.query(query, [`%${name}%`], function (error, results) {
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

  connection.query(query, [code, name, area, commission, phone, country], function (error) {
    if (error) throw error;
    res.status(OK).json({
      message: "Successfully add agent",
      data: {},
    });
  });
});

router.delete(routes.delete, (req: Request, res: Response) => {
  const query = `
    UPDATE agents SET active = 0 WHERE AGENT_CODE = ?
  `;

  connection.query(query, [req.params.id], function (error) {
    if (error) throw error;
    res.status(OK).json({
      message: "Successfully delete agent",
      data: {},
    });
  });
});

router.patch(routes.update, (req: Request, res: Response) => {
  const { name, area, commission, phone, country } = req.body;
  const { id } = req.params;

  const query = `
    UPDATE agents SET AGENT_NAME = ?, WORKING_AREA = ?, COMMISSION = ?,
    PHONE_NO = ?, COUNTRY = ? WHERE AGENT_CODE = ?
  `;

  connection.query(query, [name, area, commission, phone, country, id], function (error) {
    if (error) throw error;
    res.status(OK).json({
      message: "Successfully update agent",
      data: {},
    });
  });
});

export default router;
