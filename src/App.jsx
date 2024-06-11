import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import Header from "./components/Layout/Header";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { themeMode } = useContext(ThemeContext);

 const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    }
  ]);

  return (
    <div className={`app ${themeMode}`}>
      <div className=" container">
        <Header />
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
