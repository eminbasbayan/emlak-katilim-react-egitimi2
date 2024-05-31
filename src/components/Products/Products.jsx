import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";

function Products() {
  console.log("products component");
  return (
    <div className="products">
      {productsData.map((item) => {
        return (
          <ProductItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default Products;
