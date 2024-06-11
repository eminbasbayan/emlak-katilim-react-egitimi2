import AdminLayout from "../layouts/AdminLayout";
import AdminPage from "../pages/Admin/AdminPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
];
