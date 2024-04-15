import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const auth = localStorage.getItem("user");
const token = JSON.parse(auth).token;
// console.log(token);
export const getAllProduct = createAsyncThunk(
  "Product/getAll",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/getAllProducts",
        { headers: { Authorization: token } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/create",
  async (item, { rejectWithValue }) => {
    try {
      console.log("add->", item);
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/addProduct",
        item,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/update",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.put();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/productDetails/${item.id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  items: [],
  loading: false,
  error: null,
  message: "",
  item: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createProduct.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
        state.item = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
