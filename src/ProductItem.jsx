function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="şapka"
          width={200}
        />
      </div>
      <div className="product-info">
        <strong>Şapka</strong>
        <span>500₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
