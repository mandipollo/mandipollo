import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
	const form = useRef<HTMLFormElement | null>(null);

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
			}
		}
	};
	return (
		<main className="flex md:flex-row flex-col gap-2">
			<section className="flex md:w-1/2 w-full justify-center items-center flex-col  ">
				<h1 className=" text-4xl text-gray-400">Let's connect</h1>
				<form
					aria-label="Submit message"
					id="form"
					className="flex w-full flex-col gap-2 max-w-2xl "
					ref={form}
					onSubmit={sendEmail}
				>
					<input
						className="p-2  border-b  outline-none"
						id="name"
						type="text"
						required
						placeholder="Name"
					/>

					<input
						className="p-2 border-b  outline-none"
						id="email"
						type="email"
						required
						placeholder="Email"
					/>

					<textarea
						required
						className="p-2 border  outline-none"
						id="message"
						name="message"
						placeholder="message"
					/>
					<button
						aria-label="submit form button "
						className=" p-2 bg-gradient-to-r from-yellow-400 to-gray-400 bg-[length:200%_100%] bg-right hover:bg-left hover:animate-bg-move transition-all duration-100 "
					>
						SUBMIT
					</button>
				</form>
			</section>
			<section className="flex flex-1 justify-center items-end ">
				<h2 className="text-gray-400"> © 2024 mandipollo</h2>
			</section>
		</main>
	);
};

export default Footer;
