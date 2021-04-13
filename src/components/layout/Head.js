import NextHead from "next/head";
import PropTypes from "prop-types";

export default function Head({currentPage}) {
	return (
		<NextHead>
			<title>Rick and Morty characters{currentPage ? ": " : ""}{currentPage}</title>
			<link rel="icon" href="/favicon.ico" />
		</NextHead>
	);
};

Head.propTypes = {
    currentPage: PropTypes.string,
};

Head.defaultProps = {
	currentPage: "",
};