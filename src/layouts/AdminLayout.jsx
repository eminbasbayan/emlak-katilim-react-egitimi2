import { Outlet } from "react-router-dom";
import Navbar from "../components/Admin/Navbar";
import Sidebar from "../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
