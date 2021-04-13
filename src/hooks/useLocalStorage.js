import PropTypes from "prop-types";
import { TOKEN_KEY } from "../constants/admin";

export function setLocalStorage(key, value) {
	window.localStorage.setItem(key, value);
};

export function clearLocalStorage() {
	window.localStorage.removeItem(TOKEN_KEY);
	window.location.href = "/";
};

setLocalStorage.propTypes = {
    key: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};