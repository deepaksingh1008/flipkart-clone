import express from "express";
import AppConstant from "../../../shared/utils/AppConstant.js";
import { userController } from "../controllers/userControllers.js";
import {
  requireSignIn,
  isAdmin,
} from "../../../shared/middleware/middleware.js";
const userRouter = express.Router();

userRouter.post(AppConstant.ROUTES.USERS.REGISTER, userController.registerUser);
userRouter.post(AppConstant.ROUTES.USERS.LOGIN, userController.userLogin);
userRouter.get(
  AppConstant.ROUTES.USERS.TESTING_ROUTE,
  requireSignIn,
  isAdmin,
  userController.testingRoute
);
userRouter.post(
  AppConstant.ROUTES.USERS.FORGET_PASSWORD,
  userController.forgotPassword
);
userRouter.get(
  AppConstant.ROUTES.USERS.GET_ALL_USER,
  requireSignIn,
  isAdmin,
  userController.getAllUser
);
export default userRouter;
