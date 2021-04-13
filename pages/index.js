import axios from "axios";
import Head from "../src/components/layout/Head";
import Layout from "../src/components/layout/Layout";
import Heading from "../src/components/typography/Heading";
import CharacterCard from "../src/components/characters/CharacterCard";
import { BASE_API_URL } from "../src/constants/api";
import styles from "../styles/index.module.css";

export default function Home(props) {
  return (
    	<Layout>
			<Head currentPage="Home" />
			<Heading title="Rick and Morty Characters" />
			<section className={styles.container}>{props.characters.map(character => <CharacterCard key={character.id} character={character} />)}</section>
		</Layout>
  );
};

export async function getStaticProps() {

	let characters = [];

	try {
		const response = await axios.get(BASE_API_URL);
		characters = response.data.results;
	} catch (error) {
		console.log("ERROR CODE: " + error);
	};

	return {
		props: {
			characters: characters
		}
	};
};