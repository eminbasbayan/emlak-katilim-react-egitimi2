import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import Spinner from "../UI/Spinner";
import {
  fetchProducts,
  handleDeleteProduct,
} from "../../redux/slices/productSlice";

import "./Products.css";

function Products() {
  const { products, status, error } = useSelector((state) => state.product);
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    dispatch(handleDeleteProduct(filteredProducts));
  }

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="products-wrapper">
      <AddNewProduct setIsShowModal={setIsShowModal} />

      {status === "loading" && (
        <>
          <Spinner />
          <br />
          <br />
        </>
      )}

      {error && <p>{error}</p>}

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
