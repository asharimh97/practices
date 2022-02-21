import { Router } from 'express';
import userRouter from './user-router';
import bandungRouter from "./bandung-router";


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use("/bandung", bandungRouter);

// Export default.
export default baseRouter;
