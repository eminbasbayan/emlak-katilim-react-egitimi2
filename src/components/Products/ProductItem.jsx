import Button from "../UI/Button";
import PropTypes from "prop-types";
import "./ProductItem.css";
function ProductItem(props) {
  const { id, image, title, price, description, handleDeleteItem } = props;
  
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
        <span>{description}</span>
        <Button size="sm" color="danger" onClick={() => handleDeleteItem(id)}>
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
