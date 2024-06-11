import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // gelen ürün sepette var mı yok mu?
    const findCartItem = cartItems.find((item) => item.id === product.id);
    // eğer varsa ürünün quantity değerini 1 arttır
    if (findCartItem) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === findCartItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setCartItems(newCartItems);
      return;
    }
    // yoksa yeni ürün olarak ekle
    setCartItems((prevState) => [product, ...prevState]);
  };

  const deleteFromCart = (cartItemId) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.id !== cartItemId
    );
    setCartItems(filteredCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        fullName: "Emin Başbayan",
        addToCart,
        deleteFromCart,
        cartItems,
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
