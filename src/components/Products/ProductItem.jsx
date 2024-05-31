import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product-info">
        <strong>{props.title }</strong>
        <span>{props.price}₺</span>
        <span>{props.description}</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default ProductItem;
