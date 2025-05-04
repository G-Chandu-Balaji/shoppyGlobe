import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import ProductListReducer from "./productlistSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    ProductList: ProductListReducer,
  },
});
export default appStore;
