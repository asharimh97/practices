import { Router } from "express";
import authRouter from "./auth";
import userRouter from "./user-router";
import bandungRouter from "./bandung-router";
import agentRouter from "./agent-router";

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use("/login", authRouter);
baseRouter.use("/users", userRouter);
baseRouter.use("/bandung", bandungRouter);
baseRouter.use("/agents", agentRouter);

// Export default.
export default baseRouter;
