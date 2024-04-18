import mongoose from "mongoose";
import AppConstant from "../../../shared/utils/AppConstant";

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.ObjectId, ref: "users", required: true },
    productId: { type: mongoose.ObjectId, ref: "products", required: true },
  },
  { timestamps: true }
);

const cartModel = mongoose.model(AppConstant.SCHEMA.CART_SCHEMA, cartSchema);

export default cartModel;
