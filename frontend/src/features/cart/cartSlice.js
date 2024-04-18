import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = {
  items: loadCartFromLocalStorage(),
  loading: false,
  error: null,
  length: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingUser = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingUser) {
        existingUser.quanti += 1;
      } else {
        state.items.push({ ...action.payload, quanti: 1 });
      }
      saveCartToLocalStorage(state.items);
      state.length = state.items.length;
      state.price = state.items.reduce((acc, curr) => {
        return acc + curr.price * curr.quanti;
      }, 0);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );

      saveCartToLocalStorage(state.items);
      state.length = state.items.length;
      state.price = state.items.reduce((acc, curr) => {
        return acc + curr.price * curr.quanti;
      }, 0);
    },
    decreaseQuantity: (state, action) => {
      const existingUser = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingUser) {
        existingUser.quanti -= 1;
        if (existingUser.quanti <= 0) {
          state.items = state.items.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
      saveCartToLocalStorage(state.items);
      state.length = state.items.length;
      state.price = state.items.reduce((acc, curr) => {
        return acc + curr.price * curr.quanti;
      }, 0);
    },
    getLength: (state, action) => {
      state.length = state.items.length;
    },
    getPrice: (state, action) => {
      state.price = state.items.reduce((acc, curr) => {
        return acc + curr.price * curr.quanti;
      }, 0);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  getLength,
  getPrice,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
