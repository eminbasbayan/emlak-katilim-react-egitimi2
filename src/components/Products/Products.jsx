import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      {productsData.map((item) => (
        <ProductItem
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Products;
