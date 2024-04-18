import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import CategorySlice from "../features/products/CategorySlice";
import ProductSlice from "../features/products/ProductSlice";
import cartSlice from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    user: authSlice,
    category: CategorySlice,
    products: ProductSlice,
    cart: cartSlice,
  },
});
