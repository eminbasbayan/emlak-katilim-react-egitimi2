import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/Auth/LoginPage";

export const authRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
