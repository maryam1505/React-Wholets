import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const CART_URL = "https://fakestoreapi.com/carts/user/2";

export const cartData = createAsyncThunk("cart/fetchCartData", async () => {
  const response = await fetch(CART_URL);
  const data = await response.json();

  try {
    return data;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    loading: true,
    data: {
        products: [], 
      },
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(cartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(cartData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(cartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default cartSlice.reducer;
