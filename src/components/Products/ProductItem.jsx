import "./ProductItem.css";

function ProductItem(props) {
  console.log(props.adSoyad);
  console.log(props.image);
  console.log(props.title);
  console.log(props.price);

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product-info">
        <strong>{props.title}</strong>
        <span>{props.price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
