import mongoose from "mongoose";
import AppConstant from "../../../shared/utils/AppConstant.js";
const Product = AppConstant.SCHEMA.PRODUCT_SCHEMA;
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { data: Buffer, contentType: String },
  price: { type: Number, required: true },
  category: { type: mongoose.ObjectId, ref: "Category", required: true },
  slug: { type: String },
  offer: { type: String },
  disconnect: { type: String },
  quantity: { type: String, required: true },
  stock: { type: Boolean, default: true },
  shipping: { type: Boolean, default: true },
  trending: { type: Boolean, default: true },
  color: [{ type: String, default: "Black" }],
  // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

const productModel = mongoose.model(Product, productSchema);

export default productModel;
