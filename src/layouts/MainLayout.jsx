import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header"

const MainLayout = () => {
  return (
    <div className="main-layout">
        <Header />
        {/* Dinamik sayfalarım gelecek */}
        <Outlet />
        <footer>Footer</footer>
    </div>
  )
}

export default MainLayout