import NextHead from "next/head";
import PropTypes from "prop-types";

export default function Head({currentPage}) {
	return (
		<NextHead>
			<title>JS Frameworks CA{currentPage ? ": " : ""}{currentPage}</title>
			<link rel="icon" href="/favicon.ico" />
			<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet" />
		</NextHead>
	);
};

Head.propTypes = {
    currentPage: PropTypes.string,
};

Head.defaultProps = {
	currentPage: "",
};