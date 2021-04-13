import axios from "axios";
import Head from "../../src/components/layout/Head";
import Layout from "../../src/components/layout/Layout";
import { BASE_API_URL } from "../../src/constants/api";
import CharacterDetails from "../../src/components/characters/CharacterDetails";

export default function Character({character}) {
	return (
			<Layout>
				<Head currentPage={character.name} />
				<CharacterDetails character={character} />
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

	try {
		const response = await axios.get(url);
		character = response.data;
	} catch (error) {
		console.log("ERROR CODE: " + error);
	};

	return {
		props: {
			character: character
		}
	};
};