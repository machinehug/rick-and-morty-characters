import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FeedbackMessage from "../../../src/components/common/FeedbackMessage";
import {
	MIN_MESSAGE_LENGTH,
	MAX_MESSAGE_LENGTH,
	MIN_FIRSTNAME_LENGTH,
	MAX_FIRSTNAME_LENGTH,
	MIN_LASTNAME_LENGTH,
	MAX_LASTNAME_LENGTH
} from "../../../src/constants/contact";

const schema = yup.object().shape({
	firstname: yup.string().required("Please enter your first name.").min(MIN_FIRSTNAME_LENGTH, `Must be at least ${MIN_FIRSTNAME_LENGTH} characters.`).max(MAX_FIRSTNAME_LENGTH, `Cannot be more than ${MAX_FIRSTNAME_LENGTH} characters.`),
	lastname: yup.string().required("Please enter your last name.").min(MIN_LASTNAME_LENGTH, `Must be at least ${MIN_LASTNAME_LENGTH} characters.`).max(MAX_LASTNAME_LENGTH, `Cannot be more than ${MAX_LASTNAME_LENGTH} characters.`),
	email: yup.string().required("Please enter your email.").email("Please enter a valid email address."),
	message: yup.string().required("Please enter a message.").min(MIN_MESSAGE_LENGTH, `Must be at least ${MIN_MESSAGE_LENGTH} characters.`).max(MAX_MESSAGE_LENGTH, `Cannot be more than ${MAX_MESSAGE_LENGTH} characters.`),
	subject: yup.string().required("Please choose a subject."),
});

export default function ContactForm() {

    const [submitting, setSubmitting] = useState(false);
	const [sending, setSending] = useState(false);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit() {
		setSubmitting(true);
		setSending(true);
	};

    return (
            <section>
				{submitting && <FeedbackMessage type="success" errorMessage="You successfully sent us a message. We'll send you an email within 24 business hours." />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<fieldset disabled={sending}>
						<div>
							<label htmlFor="firstname">First name</label>
							<input type="text" name="firstname" placeholder="Your first name..." ref={register} />
							{errors.firstname && <FeedbackMessage type="error" errorMessage={errors.firstname.message} />}
						</div>
						<div>
							<label htmlFor="lastname">Last name</label>
							<input type="text" name="lastname" placeholder="Your last name..." ref={register} />
							{errors.lastname && <FeedbackMessage type="error" errorMessage={errors.lastname.message} />}
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input type="email" name="email" placeholder="Your email..." ref={register} />
							{errors.email && <FeedbackMessage type="error" errorMessage={errors.email.message} />}
						</div>
						<div>
							<label htmlFor="subject">Subject</label>
							<select name="subject" ref={register}>
								<option />
								<option name="subject" ref={register}>Account issues</option>
								<option name="subject" ref={register}>Feedback</option>
							</select>
							{errors.subject && <FeedbackMessage type="error" errorMessage={errors.subject.message} />}
						</div>
						<div>
							<label htmlFor="message">Message</label>
							<textarea type="text" name="message" rows="5" placeholder="Your message..." ref={register} />
							<div>Must be between {MIN_MESSAGE_LENGTH} to {MAX_MESSAGE_LENGTH} characters.</div>
							{errors.message && <FeedbackMessage type="error" errorMessage={errors.message.message} />}
						</div>
						<div>
							<button type="submit">SEND MESSAGE</button>
						</div>
					</fieldset>
				</form>
			</section>
    );
};