import "./ProductItem.css";

function ProductItem() {
  const image = "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg";
  const title = "Şapka";
  const price = 500;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="şapka" />
      </div>
      <div className="product-info">
        <strong>{title}</strong>
        <span>{price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
