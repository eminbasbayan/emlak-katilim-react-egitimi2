import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "./context/ThemeContext";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div className={`app ${themeMode}`}>
      <div className=" container">
        <Header />
        <h1>App</h1>
        <Products />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
