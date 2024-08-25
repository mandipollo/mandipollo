import { FC } from "react";
import { motion } from "framer-motion";

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
		<section className="flex flex-col gap-10">
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
			<section className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
				<img
					className=" transition-all duration-300 ease-in-out grid rounded-lg object-cover aspect-[4/3]"
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
