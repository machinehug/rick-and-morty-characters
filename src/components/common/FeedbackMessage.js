import PropTypes from "prop-types";

// types (css classes) you can choose from: error and success
export default function FeedbackMessage({type, errorMessage}) {
	return <div className={type}>{errorMessage}</div>;
};

FeedbackMessage.propTypes = {
	type: PropTypes.string.isRequired,
	errorMessage: PropTypes.string.isRequired
};