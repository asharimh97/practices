/* eslint-disable @typescript-eslint/no-unsafe-call */
import path from "path";
import StatusCodes from "http-status-codes";
import { Router, Request, Response } from "express";
import multer from "multer";

// Constants
const router = Router();
const { OK } = StatusCodes;

// Routes/paths
const routes = {
  index: "/",
};

const filePath = "../../public";
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
const upload = multer({ storage: storage });

router.post(routes.index, upload.single("avatar"), (req: Request, res: Response) => {
  console.log(req.file);
  console.log(req.body);

  res.status(OK).json({
    message: "File uploaded",
    data: {},
  });
});

export default router;
