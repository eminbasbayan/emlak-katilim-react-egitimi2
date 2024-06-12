import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      toast.warning("Bu sayfaya giriş izniniz bulunmamaktadır.");
    }
  }, [user]);

  if (!user) {
    return <Navigate to={"/"} />;
  } else {
    if (allowedRoles.includes(user.role)) {
      return children;
    } else {
      return <Navigate to={"/"} />;
    }
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  allowedRoles: PropTypes.array,
};

export default ProtectedRoute;
