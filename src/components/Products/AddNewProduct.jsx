import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import productInputs from "./productInputs";
import "./AddNewProduct.css";
import ProductInput from "./ProductInput";

const initialState = {
  title: "",
  image: "",
  description: "",
  price: "0",
};

function AddNewProduct(props) {
  const { setProducts } = props;
  const [formData, setFormData] = useState(initialState);

  function handleChange({ target: { name, value } }) {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      ...formData,
      id: Math.random(),
      price: Number(formData.price),
    };

    setProducts((products) => [newProduct, ...products]);

    // clear form inputs
    setFormData(initialState);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput
          key={index}
          {...input}
          value={formData[input.name]}
          handleChange={handleChange}
        />
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
