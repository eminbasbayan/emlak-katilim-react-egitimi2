import { useReducer } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "./reducers/cartReducer";

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const deleteFromCart = (cartItemId) => {
    dispatch({ type: "DELETE_FROM_CART", cartItemId });
  };

  return (
    <CartContext.Provider
      value={{
        fullName: "Emin Başbayan",
        addToCart,
        deleteFromCart,
        cartItems: state.cartItems,
        total: state.total,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
