import StatusCodes from "http-status-codes";
import { Router, Request, Response } from "express";

// Constants
const router = Router();
const { OK } = StatusCodes;

// Routes/paths
const routes = {
  getBandung: "/",
  getLautanApi: "/lautan-api",
  getPriangan: "/priangan",
};

router.get(routes.getBandung, (_: Request, res: Response) => {
  res.status(OK).json({
    message: "Hello from Bandung",
    data: {},
  });
});

router.get(routes.getLautanApi, (_: Request, res: Response) => {
  res.status(OK).json({
    message: "Bandung lautan api",
    data: {
      chant: "Mari bung rebut kembali",
    },
  });
});

router.get(routes.getPriangan, (_: Request, res: Response) => {
  res.status(OK);
  res.json({
    message: "Hohoho",
  });
  res.end();
});

export default router;
