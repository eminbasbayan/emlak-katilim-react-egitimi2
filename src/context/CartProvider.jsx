import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const CartProvider = (props) => {
  const fullName = "Emin Başbayan";

  return (
    <CartContext.Provider value={fullName}>
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
