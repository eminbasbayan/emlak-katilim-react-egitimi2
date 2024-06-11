import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/Products/ProductItem";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartItems.length === 0 && <h3>Sepette hiç ürün yok!</h3>}
      <div className="products">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} cart />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
