import { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import { CartContext } from "../../context/CartContext";
import "./ProductItem.css";
function ProductItem(props) {
  const { handleDeleteItem, cart, ...product } = props;
  const { addToCart, deleteFromCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <strong>{product.title} </strong>
        <span>
          {product.price}₺ {cart && `x ${product.quantity}`}
        </span>
        <span>{product.description}</span>
        {!cart && (
          <Button
            size="sm"
            color="primary"
            onClick={() => addToCart({ ...product, quantity: 1 })}
          >
            Add To Cart
          </Button>
        )}
        <Button
          size="sm"
          color="danger"
          onClick={() =>
            cart ? deleteFromCart(product.id) : handleDeleteItem(product.id)
          }
        >
          {cart ? "Delete From Cart" : "Delete Item"}
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  handleDeleteItem: PropTypes.func,
  cart: PropTypes.bool,
};

export default ProductItem;
