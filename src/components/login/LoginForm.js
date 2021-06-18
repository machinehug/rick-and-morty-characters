import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FeedbackMessage from "../../../src/components/common/FeedbackMessage";
import { setLocalStorage } from "../../../src/hooks/useLocalStorage";
import { TOKEN_PATH, TOKEN_KEY } from "../../../src/constants/admin";

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username."),
	password: yup.string().required("Please enter your password."),
});

export default function LoginForm() {

	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {

		setSubmitting(true);
		setError(null);

		const settings = { identifier: data.username, password: data.password };

		try {
			const response = await axios.post(TOKEN_PATH, settings);
			setLocalStorage(TOKEN_KEY, JSON.stringify(response.data.jwt));
			window.location.href = "/admin";
		} catch (error) {
			setError(error.toString());
		} finally {
			setSubmitting(false);
		};
	};

	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					{error && <FeedbackMessage type="formerror" message="Incorrect username and/or password. Please try again or contact us for help." />}
					<div>
						<label htmlFor="username">Username</label>
						<input type="text" name="username" placeholder="Your username..." ref={register} />
						{errors.username && <FeedbackMessage type="formerror" message={errors.username.message} />}
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" placeholder="Your password..." ref={register} />
						{errors.password && <FeedbackMessage type="formerror" message={errors.password.message} />}
					</div>
					<div>
						<button type="submit">{submitting ? "LOGGING IN..." : "LOGIN"}</button>
					</div>
				</fieldset>
			</form>
		</section>
	);
};