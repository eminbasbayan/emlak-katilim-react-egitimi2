import Button from "../UI/Button";
import PropTypes from "prop-types";
import "./ProductItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
function ProductItem(props) {
  const { handleDeleteItem, ...product } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <strong>{product.title}</strong>
        <span>{product.price}₺</span>
        <span>{product.description}</span>
        <Button size="sm" color="primary" onClick={() => addToCart(product)}>
          Add To Cart
        </Button>
        <Button
          size="sm"
          color="danger"
          onClick={() => handleDeleteItem(product.id)}
        >
          Delete Item
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
};

export default ProductItem;
