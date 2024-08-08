import { configureStore } from "@reduxjs/toolkit";
import productData from "../features/products/productSlice";
import featureData from "../features/products/FeatureSlice";
import cartData from "../features/user/cartSlice";
export const store = configureStore({
  reducer: {
    productData,
    featureData,
    cartData,
  },
});
