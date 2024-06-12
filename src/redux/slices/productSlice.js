import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: "idle", // idle || loading || succeeded || failed
    error: null,
  },
  reducers: {
    addNewProduct: (state, action) => {
      state.products = [{ ...action.payload }, ...state.products];
    },
    handleDeleteProduct: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addNewProduct, handleDeleteProduct } = productSlice.actions;
export default productSlice.reducer;
