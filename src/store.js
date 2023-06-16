import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
