import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({
  name: { type: String, required: true },
  slug: {
    type: String,
    lowercase: true,
  },
});

export const CategoryModel = mongoose.model("Category", CategoryScheme);
