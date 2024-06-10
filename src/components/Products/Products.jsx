import { useState } from "react";
import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(productsData);
  const [isShowModal, setIsShowModal] = useState(false);

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    setProducts(filteredProducts);
  }

  return (
    <div className="products-wrapper">
      <AddNewProduct
        setProducts={setProducts}
        setIsShowModal={setIsShowModal}
      />
      {isShowModal && (
        <Modal
          title="Uyarı: Form Hatası"
          description="Lütfen tüm inputları doldurunuz!"
          setIsShowModal={setIsShowModal}
          danger
        />
      )}

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
