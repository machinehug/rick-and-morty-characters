import PropTypes from "prop-types";

// types (css classes) you can choose from: error and success
export default function FeedbackMessage({type, message}) {
	return <p className={type}>{message}</p>;
};

FeedbackMessage.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired
};