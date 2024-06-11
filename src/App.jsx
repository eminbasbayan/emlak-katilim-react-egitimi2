import { ToastContainer } from "react-toastify";
import Products from "./components/Products/Products";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  console.log("app re-rendered");

  return (
    <div className="app container">
      <Header cartItems={cartItems} />
      <h1>App</h1>
      <Products setCartItems={setCartItems} cartItems={cartItems} />
      <ToastContainer />
    </div>
  );
}

export default App;
