import Head from "../src/components/layout/Head";
import Layout from "../src/components/layout/Layout";
import Heading from "../src/components/typography/Heading";
import ContactForm from "../src/components/contact/ContactForm";

export default function Contact() {
	return (
		<Layout>
			<Head currentPage="Contact" />
			<Heading title="Contact us" />
			<ContactForm />
		</Layout>
	);
};