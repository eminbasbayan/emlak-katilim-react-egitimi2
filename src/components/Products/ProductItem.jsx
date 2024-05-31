import Button from "../UI/Button";
import PropTypes from "prop-types";
import "./ProductItem.css";
import { useState } from "react";

/* 
* 1- component'e bağlı state güncellenirse component yeniden render olur.
* 2- component'e bağlı props güncellenirse component yeniden render olur.
*/

function ProductItem(props) {
  const [titleState, setTitleState] = useState(props.title);

  function handleTitleChanged() {
    setTitleState("New Title");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product-info">
        <strong>{titleState}</strong>
        <span>{props.price}₺</span>
        <span>{props.description}</span>
        <Button size="sm" color="primary" onClick={handleTitleChanged}>
          <strong>Change Title</strong>
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  setTitleState: PropTypes.func,
};

export default ProductItem;
