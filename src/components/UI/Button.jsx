import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const classNames = `btn btn-${props.size} btn-${props.color}`;
 
 console.log(props.children);

  return <button className={classNames}>{props.children}</button>;
}

Button.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  color: PropTypes.oneOf(["primary", "danger", "success"]),
  children: PropTypes.node,
};

export default Button;
