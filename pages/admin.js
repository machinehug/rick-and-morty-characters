import Head from "../src/components/layout/Head";
import Layout from "../src/components/layout/Layout";
import Heading from "../src/components/typography/Heading";

export default function Admin() {
	return (
		<Layout>
			<Head currentPage="Admin" />
			<Heading title="Admin" />
		</Layout>
	);
};