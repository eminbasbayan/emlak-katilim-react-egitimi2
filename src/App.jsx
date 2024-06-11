import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";

import Header from "./components/Layout/Header";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

import "react-toastify/dist/ReactToastify.css";
import UsersPage from "./pages/UsersPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

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
