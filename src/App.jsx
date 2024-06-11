import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";
import { mainRoutes, adminRoutes } from "./routes/routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { themeMode } = useContext(ThemeContext);

  const router = createBrowserRouter([
   ...mainRoutes,
   ...adminRoutes
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
