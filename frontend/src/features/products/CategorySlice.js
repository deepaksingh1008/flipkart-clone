import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const auth = localStorage.getItem("user");
const token = JSON.parse(auth).token;
export const getAllCategory = createAsyncThunk(
  "category/getAll",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/getAllCategories",
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
export const createCategory = createAsyncThunk(
  "category/create",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/addCategory",
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
export const updateCategory = createAsyncThunk(
  "category/update",
  async (item, { rejectWithValue }) => {
    try {
      const { updateData } = item;
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/updateCategory/${item.id}`,
        updateData,
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

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/deleteCategory/${item.id}`,
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
export const getSingleCategory = createAsyncThunk(
  "category/getSingle",
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/get-single-category/${item.slug}`,
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
const initialState = {
  items: [],
  loading: false,
  error: null,
  message: "",
  name: "",
};

const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createCategory.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCategory.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCategory.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleCategory.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
        state.name = action.payload.data.name;
      })
      .addCase(getSingleCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {} = categorySlice.actions;
export default categorySlice.reducer;
