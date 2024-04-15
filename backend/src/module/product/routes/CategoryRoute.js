import AppConstant from "../../../shared/utils/AppConstant.js";
import { categoryControllers } from "../controllers/categoryControllers.js";
import express from "express";
import {
  requireSignIn,
  isAdmin,
} from "../../../shared/middleware/middleware.js";
const categoryRouter = express.Router();

categoryRouter.post(
  AppConstant.ROUTES.CATEGORY.ADD_CATEGORY,
  requireSignIn,
  isAdmin,
  categoryControllers.createCategory
);
categoryRouter.get(
  AppConstant.ROUTES.CATEGORY.GET_ALL_CATEGORIES,
  requireSignIn,
  isAdmin,
  categoryControllers.getAllCategory
);
categoryRouter.put(
  AppConstant.ROUTES.CATEGORY.UPDATE_CATEGORY,
  requireSignIn,
  isAdmin,
  categoryControllers.updateCategory
);
categoryRouter.delete(
  AppConstant.ROUTES.CATEGORY.DELETE_CATEGORY,
  requireSignIn,
  isAdmin,
  categoryControllers.deleteCategory
);
categoryRouter.get(
  AppConstant.ROUTES.CATEGORY.GET_SINGLE_CATEGORY,
  requireSignIn,
  isAdmin,
  categoryControllers.getSingleCategory
);

export default categoryRouter;
