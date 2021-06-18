import { useState, useEffect } from "react";
import axios from "axios";
import Head from "../src/components/layout/Head";
import Layout from "../src/components/layout/Layout";
import Heading from "../src/components/typography/Heading";
import CharacterCard from "../src/components/characters/CharacterCard";
import Loader from "../src/components/layout/Loader";
import FeedbackMessage from "../src/components/common/FeedbackMessage";
import { BASE_API_URL } from "../src/constants/api";
import styles from "../styles/index.module.css";

export default function Home(props) {

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [results, setResults] = useState([]);

	console.log("props", props)

	useEffect(() => {
		if (props.error) {
			setError(props.error);
		};
	
		if (props.characters) {
			setResults(props.characters);
			setLoading(false);
		};
	}, []);

	return (
			<Layout>
				<Head currentPage="Home" />
				<Heading title="Rick and Morty Characters" />

				{error &&
					<>
					<FeedbackMessage type="error" message="An error occurred while loading the page. Please refresh the page or try again later." />
					<Loader />
					</>
					}

				{loading && <Loader />}

				{!loading ?
					<section className={styles.container}>
						{results.map(character => <CharacterCard key={character.id} character={character} />)}
					</section> : ""}

			</Layout>
	);
};

export async function getStaticProps() {

	let characters = [];
	let error = "";

	try {
		const response = await axios.get(BASE_API_URL);
		characters = response.data.results;
	} catch (errorMessage) {
		error = errorMessage.toString();
	};

	return {
		props: {
			characters: characters,
			error: error,
		}
	};
};