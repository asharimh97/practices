/* eslint-disable @typescript-eslint/no-unsafe-call */
import supertest from "supertest";
import StatusCodes from "http-status-codes";
import { SuperTest, Test, Response } from "supertest";

import app from "@server";
import { pErr } from "@shared/functions";
import { routes as agentRoutes } from "@routes/agent-router";
import { ParamMissingError, UserNotFoundError } from "@shared/errors";

describe("agent router", () => {
  const agentPaths = "/api/agents";

  const { INTERNAL_SERVER_ERROR, OK } = StatusCodes;
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe("GET /api/agents", () => {
    it("should return all agents", (done) => {
      agent.get(agentPaths).end((err: Error, res: Response) => {
        if (err) {
          pErr(err);
          return done();
        }

        expect(res.status).toBe(OK);
        expect(res.body.data).toBeDefined();
        expect(res.body.data.length).toBeGreaterThan(0);
        done();
      });
    });
  });
});
