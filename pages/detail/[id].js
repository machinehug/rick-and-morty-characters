import { useState, useEffect } from "react";
import axios from "axios";
import Head from "../../src/components/layout/Head";
import Layout from "../../src/components/layout/Layout";
import Loader from "../../src/components/layout/Loader";
import { BASE_API_URL } from "../../src/constants/api";
import CharacterDetails from "../../src/components/characters/CharacterDetails";

export default function Character(props) {

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [character, setCharacter] = useState([]);

	console.log("props", props);

	useEffect(() => {
		if (props.error) {
			setError(props.error);
		};
	
		if (props.character) {
			setCharacter(props.character);
			setLoading(false);
		};
	}, []);

	return (
			<Layout>
				<Head currentPage={character.name} />

				{error &&
					<>
					<FeedbackMessage type="error" message="An error occurred while loading the page. Please refresh the page or try again later." />
					<Loader />
					</>
					}

				{loading && <Loader />}

				{!loading ?
					<CharacterDetails character={character} /> : ""}

			</Layout>
	);
};

export async function getStaticPaths() {

	try {
		const response = await axios.get(BASE_API_URL);
		const characters = response.data.results;

		const paths = characters.map((character) => ({
			params: {
				id: character.id.toString()
			}
		}));

		return {
			paths,
			fallback: false
		};
	} catch (error) {
		console.log("ERROR CODE: " + error);
	};
};

export async function getStaticProps({params}) {

	const url = `${BASE_API_URL}${params.id}`;

	let character = null;
	let error = "";

	try {
		const response = await axios.get(url);
		character = response.data;
	} catch (error) {
		error = errorMessage.toString();
	};

	return {
		props: {
			character: character,
			error: error,
		}
	};
};