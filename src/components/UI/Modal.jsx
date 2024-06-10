import PropTypes from "prop-types";

function Modal(props) {
  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            <p>{props.description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Modal;
