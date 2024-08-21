import { FC } from "react";

import { motion } from "framer-motion";
import StaggeredAnimationText from "../animation/StaggeredAnimationText";

const Introduction: FC = () => {
	return (
		<section className="flex flex-col gap-10">
			<StaggeredAnimationText text="I'm a Front End Developer , Designer and Investor , living in Farnborough , UK." />

			<section className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
				<img
					className=" grayscale hover:grayscale-0 transition-all duration-300 ease-in-out grid rounded-lg object-cover aspect-[4/3]"
					src="https://framerusercontent.com/images/rXaN3YNnNyP3dSqvuierGToh58.jpg"
					alt="stock photos"
				/>
				<img
					className=" hidden md:grid rounded-lg object-cover aspect-[4/3]"
					src="https://framerusercontent.com/images/nx3rNVUkwxhAHjK5z5rho3kBrBA.webp?scale-down-to=2048"
					alt="stock photos"
				/>
			</section>
		</section>
	);
};

export default Introduction;
