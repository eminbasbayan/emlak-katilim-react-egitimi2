import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import "./Products.css";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    setProducts(filteredProducts);
  }

  async function fetchProducts() {
    setIsLoading(true);
    setProducts([]);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (res.ok) {
        setProducts(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  // fetchProducts();

  useEffect(()=>{
  //! component ilk yüklendiğinde bir kere çalışsın.
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   //! component ilk yüklendiğinde bir kere çalışır ve dependecy array'e verilen değerler güncellendiğinde bir daha çalışır.
  //   fetchProducts();
  // }, [isShowModal]);

  // useEffect(() => {
  //   //! component her render olduğunda çalışır.
  //   console.log("run");
  // });

  return (
    <div className="products-wrapper">
      <AddNewProduct
        setProducts={setProducts}
        setIsShowModal={setIsShowModal}
      />
      <Button onClick={fetchProducts} size="sm" color="primary">
        Fetch Data
      </Button>

      <br />
      <br />

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
