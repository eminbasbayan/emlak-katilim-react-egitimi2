import { ToastContainer } from "react-toastify";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="app container">
      <Header />
      <h1>App</h1>
      <Products />
      <ToastContainer />
    </div>
  );
}

export default App;
