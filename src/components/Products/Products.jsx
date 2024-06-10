import { useState } from "react";
import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(productsData);

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    setProducts(filteredProducts);
  }

  return (
    <div className="products-wrapper">
      <AddNewProduct setProducts={setProducts} />
      <Modal
        title="Uyarı: Form Hatası"
        description="Lütfen tüm inputları doldurunuz!"
      />
      <div className="products">
        {products.map((item) => {
          return (
            <ProductItem
              key={item.id}
              {...item}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
