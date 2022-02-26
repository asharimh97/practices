/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import userService from "@services/user-service";
import { ParamMissingError } from "@shared/errors";
import { generateAccessToken, verifyAccessToken } from "@shared/auth";

// Constants
const router = Router();
const { OK, NOT_FOUND } = StatusCodes;

const routes = {
  login: "/",
  verify: "/verify",
};

router.post(routes.login, async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await userService.getUser(email);

  if (!email || !password) {
    throw new ParamMissingError();
  }

  if (!user) {
    return res.status(NOT_FOUND).json({
      message: "User not found",
    });
  }

  return res.status(OK).json({
    message: "User found",
    data: {
      user,
      access_token: generateAccessToken(user),
    },
  });
});

router.get(routes.verify, verifyAccessToken, (req: Request, res: Response) => {
  res.status(200).json({
    message: "Access token is valid",
  });
});

export default router;
