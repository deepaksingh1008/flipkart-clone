import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userRegister = createAsyncThunk(
  "users/register",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        postData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/login",
        postData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: false,
  items: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: `login`,
  initialState,
  reducers: {
    checkLogin: (state) => {
      const newState = localStorage.getItem("user");
      if (newState) {
        state.data = true;
        state.items = JSON.parse(newState);
      } else {
        state.data = false;
      }
    },
    logout: (state) => {
      localStorage.clear("user");
      state.data = false;
      state.items = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.data = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { checkLogin, logout } = authSlice.actions;
export default authSlice.reducer;
