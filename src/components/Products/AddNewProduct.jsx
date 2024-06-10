import { useState } from "react";
import Button from "../UI/Button";
import productInputs from "./productInputs";
import "./AddNewProduct.css";
import ProductInput from "./ProductInput";

function AddNewProduct() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    price: 0,
  });

  function handleChange({ target: { name, value } }) {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  console.log(formData);

  return (
    <form className="product-form">
      {productInputs.map((input, index) => (
        <ProductInput key={index} {...input} handleChange={handleChange} />
      ))}
      <Button size="sm" color="primary">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

export default AddNewProduct;
