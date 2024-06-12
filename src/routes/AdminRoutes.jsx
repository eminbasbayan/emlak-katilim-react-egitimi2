import { Suspense, lazy } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";

const AdminPage = lazy(() => import("../pages/Admin/AdminPage"));
const AdminSettingsPage = lazy(() => import("../pages/Admin/SettingsPage"));

export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminSettingsPage />
          </Suspense>
        ),
      },
    ],
  },
];
