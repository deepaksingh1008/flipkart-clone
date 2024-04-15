import mongoose from "mongoose";
import AppConstant from "../../../shared/utils/AppConstant.js";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    answer: { type: String, required: true },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model(
  AppConstant.SCHEMA.USER_SCHEMA,
  userSchema
);
