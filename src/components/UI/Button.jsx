import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const classNames = `btn btn-${props.size} btn-${props.color}`;

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
