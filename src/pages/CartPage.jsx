import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/Products/ProductItem";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const totalCartItems = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>

      {cartItems.length === 0 ? (
        <h3>Sepette hiç ürün yok!</h3>
      ) : (
        <div className="total">
          <strong>Total: </strong> {totalCartItems.toFixed(2)}
        </div>
      )}
      <div className="products">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} cart />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
