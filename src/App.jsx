import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

import UsersPage from "./pages/UsersPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

import "react-toastify/dist/ReactToastify.css";
import Error404 from "./pages/404Page";

function App() {
  const { themeMode } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
    {
      path: "/users",
      element: <UsersPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return (
    <div className={`app ${themeMode}`}>
      <div className=" container">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
