import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import CategorySlice from "../features/products/CategorySlice";
import ProductSlice from "../features/products/ProductSlice";
export const store = configureStore({
  reducer: {
    user: authSlice,
    category: CategorySlice,
    products: ProductSlice,
  },
});
