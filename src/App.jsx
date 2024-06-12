import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { mainRoutes, adminRoutes } from "./routes/routes";

import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const { themeMode } = useSelector((state) => state.theme);
  const router = createBrowserRouter([...mainRoutes, ...adminRoutes]);

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
