import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

const { UNAUTHORIZED } = StatusCodes;

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
