import { useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import "./Products.css";
import Spinner from "../UI/Spinner";
import useFetchData from "../../hooks/FetchData";

function Products() {
  const {
    data: products,
    setData: setProducts,
    isLoading,
    error,
  } = useFetchData("https://fakestoreapi.com/products/");
  
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

      {isLoading && (
        <>
          <Spinner />
          <br />
          <br />
        </>
      )}

      {isShowModal && (
        <Modal
          title="Uyarı: Form Hatası"
          description="Lütfen tüm inputları doldurunuz!"
          setIsShowModal={setIsShowModal}
          danger
        />
      )}
      {error && <span>Data alınırken bir hata oluştu!</span>}
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
