/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { JWT_SECRET } from "@constants/api";
import { IUser } from "@models/user-model";
import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";

const { UNAUTHORIZED } = StatusCodes;

const tokenSecret = JWT_SECRET;
export const generateAccessToken = (user: IUser) => {
  return jwt.sign(user, tokenSecret, { expiresIn: "30s", algorithm: "HS256" });
};

export const verifyAccessToken = expressJwt({ secret: tokenSecret, algorithms: ["HS256"] });

// verify jwt token, if valid, next()
// otherwise return error
const auth = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
  const token = bearer?.split(" ")[1];

  if (!token) {
    return res.status(UNAUTHORIZED).json({
      message: "Unauthorized",
      status: res.statusCode,
    });
  }

  console.log(`Time: ${Date.now()}`);

  next();
};

export default auth;
