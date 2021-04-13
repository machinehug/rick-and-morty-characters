import Head from "../src/components/layout/Head";
import Layout from "../src/components/layout/Layout";
import Heading from "../src/components/typography/Heading";
import LoginForm from "../src/components/login/LoginForm";

export default function Contact() {
	return (
			<Layout>
				<Head currentPage="Login" />
				<Heading title="Login" />
				<LoginForm />
			</Layout>
	);
};