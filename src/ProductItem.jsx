const productItemCss = {
  border: "1px solid #ccc",
  width: "200px",
};

const productImageCss = {
  width: "100%",
  display: "flex",
};

const productInfoCss = {
  padding: "14px",
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
};

function ProductItem() {
  return (
    <div className="product-item" style={productItemCss}>
      <div className="product-image">
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="şapka"
          style={productImageCss}
        />
      </div>
      <div className="product-info" style={productInfoCss}>
        <strong>Şapka</strong>
        <span>500₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
