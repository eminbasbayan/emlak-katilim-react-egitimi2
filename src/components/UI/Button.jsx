import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const classNames = `btn btn-${props.size} btn-${props.color}`;

  return <button className={classNames}>{props.title}</button>;
}

Button.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  color: PropTypes.oneOf(["primary", "danger", "success"]),
  title: PropTypes.string.isRequired,
};

export default Button;
