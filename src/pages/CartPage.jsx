import { useSelector } from "react-redux";
import CartItem from "../components/Products/ProductItem";

const CartPage = () => {
  const { cartItems, total: totalCartItems } = useSelector(
    (state) => state.cart
  );

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
