import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";

import "./ProductItem.css";
import { addToCart, deleteFromCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
function ProductItem(props) {
  const { handleDeleteItem, cart, ...product } = props;
  const { id, image, title, price, quantity, description } = product;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <strong onClick={() => navigate(`/products/${id}`)}>{title} </strong>
        <span>
          {price}₺ {cart && `x ${quantity}`}
        </span>
        <span>{description}</span>
        {!cart && (
          <Button
            size="sm"
            color="primary"
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          >
            Add To Cart
          </Button>
        )}
        <Button
          size="sm"
          color="danger"
          onClick={() =>
            cart
              ? dispatch(deleteFromCart({ cartItemId: id }))
              : handleDeleteItem(id)
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
