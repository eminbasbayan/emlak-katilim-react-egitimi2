import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    theme: {},
    auth: {},
    product: {},
  },
});

export default store;
