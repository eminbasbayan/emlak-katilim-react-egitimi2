import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/CartContext";
import "./Button.css";

function Button(props) {
  const value = useContext(CartContext);
  const classNames = `btn btn-${props.size} btn-${props.color}`;

  console.log(value);

  return (
    <button className={classNames} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  color: PropTypes.oneOf(["primary", "danger", "success"]).isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
