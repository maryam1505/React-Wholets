import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartData } from "./user/cartSlice";
import { fetchProductById } from "./products/productSlice";

export const fetchCartWithProducts = createAsyncThunk(
  "cart/fetchWithProducts",
  async (_, { dispatch }) => {
    const cartResponse = await dispatch(cartData()).unwrap();

    const productIds = cartResponse[0].products.map(
      (product) => product.productId
    );
    const productPromises = productIds.map((id) =>
      dispatch(fetchProductById(id)).unwrap()
    );
    const productDetails = await Promise.all(productPromises);

    return {
      cart: cartResponse[0],
      products: productDetails,
    };
  }
);
