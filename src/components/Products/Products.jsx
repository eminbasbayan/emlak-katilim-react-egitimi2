import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const image = "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg";
  const title = "Şapka";
  const price = "500";
  const fullName = "Emin Başbayan";

  return (
    <div className="products">
      <ProductItem
        adSoyad={fullName}
        image={image}
        title={title}
        price={price}
      ></ProductItem>
    </div>
  );
}

export default Products;
