import mongoose from "mongoose";
export const dbConnection = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("Database connected");
};
