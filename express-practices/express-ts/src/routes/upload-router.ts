/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import path from "path";
import StatusCodes from "http-status-codes";
import { Router, Request, Response } from "express";
import multer from "multer";
import { ACCEPTED_IMAGE_FILES } from "@constants/general";

// @ts-ignore
import { ResponseAPI } from "@types/api";

// Constants
const router = Router();
const { OK, BAD_REQUEST } = StatusCodes;

// Routes/paths
const routes = {
  index: "/",
};

const filePath = "../../public";
const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (!file) {
    return cb(new Error("No file received"), false);
  }

  const ext = path.extname(file.originalname).toLowerCase();
  if (!ACCEPTED_IMAGE_FILES.includes(ext)) {
    console.log({ ext });
    return cb(new Error("Only images are allowed"), false);
  }

  return cb(null, true);
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, filePath));
  },
  filename: (req, file, cb) => {
    const { fieldname } = file;
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originName = file.originalname.toLowerCase().split(" ").join("-");
    const name = `${fieldname}-${uniqueName}-${originName}`;

    cb(null, name);
  },
});
const upload = multer({ storage: storage, fileFilter: fileFilter });

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
