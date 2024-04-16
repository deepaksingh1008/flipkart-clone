import AppConstant from "../../../shared/utils/AppConstant.js";
import { productControllers } from "../controllers/productContollers.js";
import express from "express";
import formidable from "express-formidable";
import {
  requireSignIn,
  isAdmin,
} from "../../../shared/middleware/middleware.js";
const productRouter = express.Router();

productRouter.post(
  AppConstant.ROUTES.PRODUCT.ADD_PRODUCT,
  requireSignIn,
  isAdmin,
  formidable(),
  productControllers.createProduct
);
productRouter.get(
  AppConstant.ROUTES.PRODUCT.GET_ALL_PRODUCT,
  requireSignIn,
  isAdmin,
  productControllers.getAllProduct
);
productRouter.put(
  AppConstant.ROUTES.PRODUCT.UPDATE_PRODUCT,
  requireSignIn,
  isAdmin,
  productControllers.updateProductController
);
productRouter.delete(
  AppConstant.ROUTES.PRODUCT.DELETE_PRODUCT,
  requireSignIn,
  isAdmin,
  productControllers.deleteProductController
);
productRouter.get(
  AppConstant.ROUTES.PRODUCT.GET_PHOTO,
  productControllers.getPhoto
);
productRouter.get(
  AppConstant.ROUTES.PRODUCT.GET_SINGLE_PRODUCT,
  requireSignIn,
  productControllers.getSingleProduct
);
productRouter.get(
  AppConstant.ROUTES.PRODUCT.GET_PRODUCT,
  productControllers.getSingleProductBySlug
);

export default productRouter;
