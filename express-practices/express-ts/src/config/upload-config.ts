/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import path from "path";
import { Request } from "express";
import multer from "multer";
import { ACCEPTED_IMAGE_FILES } from "@constants/general";

const DEFAULT_FILE_PATH = "../../public";
const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (!file) {
    return cb(new Error("No file received"), false);
  }

  const ext = path.extname(file.originalname).toLowerCase();
  if (!ACCEPTED_IMAGE_FILES.includes(ext)) {
    return cb(new Error("Only images are allowed"), false);
  }

  return cb(null, true);
};

const storageConfig = (filePath = DEFAULT_FILE_PATH) => {
  return multer.diskStorage({
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
};

const uploadConfig = (filePath?: string | undefined) => {
  const storage = storageConfig(filePath);

  return multer({ storage: storage, fileFilter: fileFilter });
};

export default uploadConfig;
