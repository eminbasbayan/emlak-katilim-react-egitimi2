import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findCartItem) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === findCartItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.cartItems = [
          { ...action.payload, quantity: 1 },
          ...state.cartItems,
        ];
      }

      state.total = state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.cartItemId
      );

      state.total = state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
