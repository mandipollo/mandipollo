import { FC } from "react";

import taskdomSvg from "../../assets/taskdomLogo.svg";
import estateSvg1 from "../../assets/house-sun-svgrepo-com.svg";
import GridBackground from "../GridBackground";

const Projects: FC = () => {
	return (
		<main className="flex relative md:flex-row flex-col border-y  p-2 md:py-20  border-opacity-5  ">
			<GridBackground />
			<section className="flex flex-col h-full md:w-1/2  md:sticky top-20  ">
				<h1 className="md:text-5xl text-2xl flex justify-center">Projects</h1>
			</section>
			<section className="flex flex-col  flex-1 w-full font-extralight  text-gray-400">
				<article className=" flex flex-col space-y-10 ">
					<figure className="h-14 w-14 bg-black flex justify-center items-center">
						<img
							loading="lazy"
							src={taskdomSvg}
							alt="taskdom logo"
							className="h-10 w-10"
						/>
					</figure>

					<h2>
						<a
							aria-label="directs user to taskdom web app in new tab"
							rel="noopener noreferrer"
							className="text-black underline underline-offset-2 hover:text-yellow-600 text-lg"
							target="_blank"
							href="https://taskdom.web.app/"
						>
							Taskdom.
						</a>
					</h2>

					<figure className="h-full w-full flex rounded-md  justify-center items-center  ">
						<img
							loading="lazy"
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1724872008/taskSnapshot_q7udnp_nku8lu.webp"
							alt="taskdom"
						/>
					</figure>

					<p>
						A project management app which lets you manage , assign tasks to
						members.
					</p>

					<section>
						<ul className="flex flex-col space-y-2 text-gray-400 ">
							<li className="text-black ">Tech Stack</li>
							<li>Typescript</li>
							<li>React</li>
							<li>Redux/toolkit</li>
							<li>React-router</li>
							<li>Tailwind</li>
							<li>Firebase auth</li>
							<li>Firestore database</li>
							<li>Firebase storage</li>
							<li>Cloud function</li>
						</ul>
					</section>
				</article>
				<article className=" flex flex-col space-y-10">
					<figure className="h-14 w-14 bg-[#01DEB6] flex justify-center items-center">
						<img
							loading="lazy"
							src={estateSvg1}
							alt="estate logo"
							className="h-10 w-10"
						/>
					</figure>
					<h2>
						<a
							aria-label="directs user to estate web app in new tab"
							rel="noopener noreferrer"
							href="https://estate-2aef8.web.app/"
							target="_blank"
							className="text-black underline underline-offset-2 hover:text-yellow-600 text-lg"
						>
							Estate.
						</a>
					</h2>

					<figure className="h-full w-full flex  rounded-md  justify-center items-center ">
						<img
							loading="lazy"
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1724871992/estate-min_zqenop_retwbo.webp"
							alt="estate"
						/>
					</figure>

					<p>
						A property app to window shop our outrageously expensive properties.
					</p>

					<section>
						<ul className="flex flex-col space-y-2 text-gray-400">
							<li className="text-black ">Tech Stack</li>

							<li>React</li>
							<li>Redux/toolkit</li>
							<li>React-router</li>
							<li>Material-UI</li>
							<li>Firebase auth</li>
							<li>Realtime Database</li>
							<li>cloud function</li>
							<li>Data from Rightmove Api </li>
						</ul>
					</section>
				</article>
			</section>
		</main>
	);
};

export default Projects;
