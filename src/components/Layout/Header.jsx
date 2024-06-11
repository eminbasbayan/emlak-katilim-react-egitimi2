import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const value = useContext(CartContext);
  const { themeModeHandler, themeMode } = useContext(ThemeContext);
  return (
    <header className="position-sticky top-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Website
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link position-relative" href="#">
                  <i className="bi bi-cart"></i>

                  <span className="position-absolute top-4 start-100 translate-middle badge rounded-pill bg-danger">
                    {value.cartItems.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link position-relative"
                  onClick={themeModeHandler}
                >
                  {themeMode === "light" ? (
                    <i className="bi bi-toggle-off"></i>
                  ) : (
                    <i className="bi bi-toggle-on"></i>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
