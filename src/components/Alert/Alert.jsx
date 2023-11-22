import "./Alert.css";
import iconSuccess from "src/assets/success.png";
import iconError from "src/assets/error.png";
import PropTypes from "prop-types";

const Alert = ({ type, close }) => {
  const types = {
    success: {
      message: "Order created successfully",
      icon: iconSuccess,
    },
    error: {
      message: "Sorry, we had difficulties, try again later",
      icon: iconError,
    },
  };
  const { message, icon } = types[type];
  return (
    <div className="alert-container">
      <img src={icon} alt={type} />
      <h1>{message}</h1>
      <button type="button" className="primary" onClick={close}>
        Close
      </button>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string,
  close: PropTypes.func,
};

export default Alert;
