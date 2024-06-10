import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewProduct.css";

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
      <div className="product-input">
        <label>Title</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün ismi giriniz."
          name="title"
        />
      </div>
      <div className="product-input">
        <label>Image</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün görseli giriniz."
          name="image"
        />
      </div>
      <div className="product-input">
        <label>Description</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün açıklaması giriniz."
          name="description"
        />
      </div>
      <div className="product-input">
        <label>Price</label>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Ürün fiyatı giriniz."
          name="price"
        />
      </div>
      <Button size="sm" color="primary">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

export default AddNewProduct;
