/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import userService from "@services/user-service";
import { ParamMissingError } from "@shared/errors";
import {
  decodeRefreshToken,
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "@shared/auth";

// Constants
const router = Router();
const { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } = StatusCodes;

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

// This request uses refresh token as a bearer token
router.post(routes.refresh, verifyRefreshToken, (req: Request, res: Response) => {
  const user = decodeRefreshToken(req);
  if (user) {
    // @ts-ignore
    const { iat, exp, ...parsedUser } = user;
    return res.status(OK).json({
      message: "Refresh token is valid",
      data: {
        // @ts-ignore
        access_token: generateAccessToken(parsedUser),
        // @ts-ignore
        refresh_token: generateRefreshToken(parsedUser),
      },
    });
  }

  res.status(INTERNAL_SERVER_ERROR).json({
    message: "Internal server error",
  });
});

export default router;
