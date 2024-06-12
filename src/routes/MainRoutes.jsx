import MainLayout from "../layouts/MainLayout";
import Error404 from "../pages/404Page";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/Admin/AdminPage";
import CartPage from "../pages/CartPage";
import ChatPage from "../pages/ChatPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import UsersPage from "../pages/UsersPage";
import { fethWithTimeout } from "../utils/fetchWithTimeout";

export const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        loader: async () => {
          const res = await fethWithTimeout(
            "https://jsonplaceholder.typicode.com/users",
            {},
            5000
          );
          const data = await res.json();
          return data;
        },
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
        path: "/products/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];
