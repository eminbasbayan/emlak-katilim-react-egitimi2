export const initialState = {
  cartItems: [],
  total: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const findCartItem = state.cartItems.find(
        (item) => item.id === action.product.id
      );
      let newCartItems;
      if (findCartItem) {
        newCartItems = state.cartItems.map((item) => {
          if (item.id === findCartItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        newCartItems = [{ ...action.product, quantity: 1 }, ...state.cartItems];
      }

      const totalCartItems = state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      return {
        ...state,
        total: totalCartItems,
        cartItems: newCartItems,
      };
    }
    case "DELETE_FROM_CART": {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.cartItemId
      );

      const totalCartItems = filteredCartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      return {
        ...state,
        total: totalCartItems,
        cartItems: filteredCartItems,
      };
    }

    default:
      return state;
  }
}
