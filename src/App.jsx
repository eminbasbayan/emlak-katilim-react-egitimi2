import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { mainRoutes, adminRoutes } from "./routes/routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const themeMode = "light";
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
