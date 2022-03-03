/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import userService from "@services/user-service";
import { ParamMissingError } from "@shared/errors";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "@shared/auth";

// Constants
const router = Router();
const { OK, NOT_FOUND } = StatusCodes;

const routes = {
  login: "/",
  verify: "/verify",
  refresh: "/refresh",
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
      refresh_token: generateRefreshToken(user),
    },
  });
});

router.get(routes.verify, verifyAccessToken, (req: Request, res: Response) => {
  res.status(200).json({
    message: "Access token is valid",
  });
});

router.post(routes.refresh, verifyRefreshToken, (req: Request, res: Response) => {
  return res.status(OK).json({
    message: "Refresh token is valid",
    data: {
      access_token: "access token baru",
      refresh_token: "refresh token baru",
    },
  });
});

export default router;
