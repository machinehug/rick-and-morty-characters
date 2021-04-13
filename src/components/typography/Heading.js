import PropTypes from "prop-types";
import styles from "../../../styles/Heading.module.css";

export default function Heading({title}) {
    return <h1 className={styles.title}>{title}</h1>;
};

Heading.propTypes = {
    title: PropTypes.string,
};

Heading.defaultProps = {
	title: "",
};