import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import productInputs from "./productInputs";
import "./AddNewProduct.css";
import ProductInput from "./ProductInput";

function AddNewProduct(props) {
  const { setProducts } = props;
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
  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      ...formData,
      id: Math.random(),
      price: Number(formData.price),
    };

    setProducts((products) => [newProduct, ...products]);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput key={index} {...input} handleChange={handleChange} />
      ))}
      <Button size="sm" color="primary">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

AddNewProduct.propTypes = {
  setProducts: PropTypes.func,
};

export default AddNewProduct;
