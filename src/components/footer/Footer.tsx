import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer: React.FC<{ scrollY: number }> = ({ scrollY }) => {
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
		<main className="flex md:flex-row flex-col gap-2 z-10 p-2">
			<section className="flex md:w-1/2 w-full justify-center items-center flex-col  ">
				<div className="flex flex-col">
					<h1 className=" text-2xl">Have a project in mind?</h1>
				</div>

				<form
					aria-label="Submit message"
					id="form"
					className="flex w-full flex-col gap-2 max-w-2xl text-gray-400 p-2 "
					ref={form}
					onSubmit={sendEmail}
				>
					<div className="flex relative w-full">
						{scrollY >= 0.91 && (
							<span className="opacity-30 rounded-md blur bg-gradient-to-r from-red-400 to-cyan-400 -inset-2 absolute "></span>
						)}
						<input
							className="p-2 w-full  outline-none rounded-md isolate  bg-white/20 ring-1 ring-black/5"
							id="name"
							type="text"
							required
							placeholder="Name"
						/>
					</div>

					<div className="flex relative">
						{scrollY >= 0.95 && (
							<span className="opacity-30 rounded-md blur bg-gradient-to-r from-blue-400 to-green-400 -inset-2 absolute "></span>
						)}
						<input
							className="p-2 w-full isolate  bg-white/20 shadow-lg ring-1 ring-black/5  outline-none rounded-md"
							id="email"
							type="email"
							required
							placeholder="Email"
						/>
					</div>

					<div className="flex relative">
						{scrollY >= 0.98 && (
							<span className="opacity-30 rounded-md blur bg-gradient-to-r from-red-400 to-cyan-400 -inset-2 absolute "></span>
						)}
						<textarea
							required
							className="p-2 w-full isolate  bg-white/20 shadow-lg ring-1 ring-black/5 outline-none rounded-md"
							id="message"
							name="message"
							placeholder="message"
						/>
					</div>

					<button
						aria-label="submit form button  "
						className="rounded-md text-white p-2 bg-gradient-to-r from-yellow-400 to-purple-400 bg-[length:200%_100%] bg-right hover:bg-left hover:animate-bg-move transition-all duration-100 "
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
