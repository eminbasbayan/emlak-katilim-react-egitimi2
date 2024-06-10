import PropTypes from "prop-types";

function ProductInput(props) {
  return (
    <div className="product-input">
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
}

ProductInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProductInput;
