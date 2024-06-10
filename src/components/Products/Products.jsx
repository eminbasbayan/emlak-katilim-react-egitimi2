import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import AddNewProduct from "./AddNewProduct";
import "./Products.css";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState(productsData);

  console.log(products);

  return (
    <div className="products-wrapper">
      <AddNewProduct productsData={productsData} setProducts={setProducts} />
      <div className="products">
        {products.map((item) => {
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
