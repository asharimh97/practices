/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import StatusCodes from "http-status-codes";
import { Router, Request, Response } from "express";

// @ts-ignore
import { ResponseAPI } from "@types/api";
import uploadConfig from "src/config/upload-config";

// Constants
const router = Router();
const { OK, BAD_REQUEST } = StatusCodes;

// Routes/paths
const routes = {
  index: "/",
};

const upload = uploadConfig();

router.post(routes.index, upload.single("avatar"), (req: Request, res: Response<ResponseAPI>) => {
  // console.log(req.file); // -> req.file is the `avatar` file
  // console.log(req.body); // -> req.body contains the text fields, if there were any

  if (!req.file) {
    return res.status(BAD_REQUEST).json({
      message: "No file received",
    });
  }

  res.status(OK).json({
    message: "File uploaded",
    data: {},
  });
});

export default router;
