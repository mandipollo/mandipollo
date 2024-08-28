import { FC } from "react";
import { motion } from "framer-motion";
import GridBackground from "../GridBackground";
import Lottie from "lottie-react";
import devAniamtion from "../../assets/Animation - 1724870862507.json";

const Introduction: FC = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, //  delay between each animation
			},
		},
	};

	const childVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<main className="flex flex-col gap-10">
			<GridBackground />
			<motion.p
				className="text-5xl md:text-8xl text-gray-400"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.span className="p-2" variants={childVariants}>
					I'm a Frontend Developer,{" "}
				</motion.span>
				<motion.span
					variants={childVariants}
					className="text-5xl md:text-8xl text-black"
				>
					Designer,{" "}
				</motion.span>
				<motion.span variants={childVariants}>
					and Investor, based in{" "}
				</motion.span>
				<motion.span
					variants={childVariants}
					className="text-5xl md:text-8xl text-black"
				>
					Farnborough,
				</motion.span>
				<motion.span variants={childVariants}> UK.</motion.span>
			</motion.p>
			<figure className=" flex justify-center items-center">
				<Lottie animationData={devAniamtion} alt="A web developer working" />
			</figure>
		</main>
	);
};

export default Introduction;
