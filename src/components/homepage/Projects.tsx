import { FC } from "react";
import StaggeredAnimationText from "../animation/StaggerAnimation";

import taskdomSvg from "../../assets/taskdomLogo.svg";
import estateSvg from "../../assets/estateLogo.svg";

const Projects: FC = () => {
	return (
		<section className="flex relative md:flex-row flex-col border-y  p-2 md:py-20  border-opacity-5  ">
			<section className="flex flex-col h-full md:w-1/2  md:sticky top-20  ">
				{/* <p className="md:text-5xl text-2xl">Projects.</p> */}
				<StaggeredAnimationText
					text="Projects"
					className="md:text-5xl text-2xl flex justify-center"
				/>
			</section>
			<section className="flex  flex-1 w-full  text-gray-400">
				<ul className="flex flex-col space-y-10 font-extralight">
					<li className=" flex flex-col space-y-10">
						<div className="h-14 w-14 bg-black flex justify-center items-center">
							<img src={taskdomSvg} alt="taskdom logo" className="h-10 w-10" />
						</div>

						<div>
							<a
								className="text-black underline underline-offset-2 hover:text-yellow-600 text-lg"
								target="_blank"
								href="https://taskdom.web.app/"
							>
								Taskdom.
							</a>
						</div>

						<div className="h-full w-full flex rounded-md  justify-center items-center  ">
							<img
								src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1719861512/taskSnapshot_q7udnp.jpg"
								alt="taskdom"
							/>
						</div>

						<p>
							A project management app which lets you manage , assign tasks to
							members.
						</p>
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

						<link rel="stylesheet" href="https://taskdom.web.app/"></link>
					</li>
					<li className=" flex flex-col space-y-10">
						<div className="h-14 w-14 bg-[#F0F0F0] flex justify-center items-center">
							<img src={estateSvg} alt="estate logo" className="h-10 w-10" />
						</div>
						<div>
							<a
								href="https://estate-2aef8.web.app/"
								target="_blank"
								className="text-black underline underline-offset-2 hover:text-yellow-600 text-lg"
							>
								Estate.
							</a>
						</div>

						<div className="h-full w-full flex rounded-md  justify-center items-center ">
							<img
								src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1724511326/estate-min_zqenop.png"
								alt="estate"
							/>
						</div>

						<p>
							A property app to window shop our outrageously expensive
							properties.
						</p>
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
					</li>
				</ul>
			</section>
		</section>
	);
};

export default Projects;
