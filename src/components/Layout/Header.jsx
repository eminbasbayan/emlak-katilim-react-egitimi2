import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { themeModeHandler } from "../../redux/slices/themeSlice";
import { logoutUser } from "../../redux/slices/authSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { themeMode } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);

  return (
    <header className="position-sticky top-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Website
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link position-relative" to="/cart">
                  <i className="bi bi-cart"></i>

                  <span className="position-absolute top-4 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link position-relative"
                  onClick={() => dispatch(themeModeHandler())}
                >
                  {themeMode === "light" ? (
                    <i className="bi bi-toggle-off"></i>
                  ) : (
                    <i className="bi bi-toggle-on"></i>
                  )}
                </button>
              </li>
              <li className="nav-item">
                {user && (
                  <button
                    className="nav-link position-relative"
                    onClick={() => dispatch(logoutUser())}
                  >
                    <i className="bi bi-box-arrow-in-right"></i>
                  </button>
                )}
                {!user && (
                  <button
                    className="nav-link position-relative"
                    onClick={() => navigate("/auth/login")}
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
