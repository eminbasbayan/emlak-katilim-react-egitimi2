import Button from "../UI/Button";
import PropTypes from "prop-types";
import "./ProductItem.css";
function ProductItem(props) {
  // const { id, image, title, price, description, handleDeleteItem } = props;
  const { handleDeleteItem, cartItems, setCartItems, ...product } = props;

  const addToCart = () => {
    setCartItems([product, ...cartItems]);
  };

  console.log("product-item re-rendered");

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <strong>{product.title}</strong>
        <span>{product.price}₺</span>
        <span>{product.description}</span>
        <Button size="sm" color="primary" onClick={addToCart}>
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
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

export default ProductItem;
