import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import AddNewProduct from "./AddNewProduct";
import "./Products.css";

function Products() {
  return (
    <div className="products-wrapper">
      <AddNewProduct />
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
    </div>
  );
}

export default Products;
