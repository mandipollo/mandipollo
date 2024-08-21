import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
	const form = useRef<HTMLFormElement | null>(null);
	console.log(form.current);

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.current) return;

		try {
			await emailjs.sendForm(
				"service_tjh6uad",
				"template_h4w6yvg",
				form.current,
				{
					publicKey: "5S7DJhks2VMQmSc0U",
				}
			);

			form.current.reset();
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
		}
	};

	return (
		<form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
			<input
				className="p-2 border-b border-gray-400 outline-none"
				id="name"
				type="text"
				required
				placeholder="Name"
			/>

			<input
				className="p-2 border-b border-gray-400 outline-none"
				id="email"
				type="email"
				required
				placeholder="Email"
			/>

			<textarea
				required
				className="p-2 border border-gray-400 outline-none"
				id="message"
				name="message"
				placeholder="message"
			/>
			<button className="bg-yellow-600 p-2  ">SUBMIT</button>
		</form>
	);
};
