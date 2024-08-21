import React, { FC } from "react";
import { motion } from "framer-motion";

const StaggeredAnimationText: FC<{ text: string }> = ({ text }) => {
	//   to easily reuse the animation props
	const AnimationProps = {
		initial: { opacity: 0, y: 0 },
		animate: { opacity: 1, y: 0 },
	};
	return (
		<div>
			{/* staggered text animations */}
			{/* for screen readers */}
			<span className="sr-only">{text}</span>
			{/* for animation purposes and users */}
			{/* use the initial and animate states from AnimateProps */}
			<motion.span
				arial-hidden="true"
				className="md:text-8xl text-6xl text-gray-400"
				initial="initial"
				animate="animate"
				transition={{ staggerChildren: 0.01 }}
			>
				{/* render words */}
				{text.split(" ").map((word, index) => (
					<React.Fragment key={index}>
						{/* split and animate individual text  characters */}
						{word.split("").map((letter, index) => (
							<motion.span
								className="inline-block"
								key={index}
								variants={AnimationProps}
							>
								{letter}
							</motion.span>
						))}
						{/* add space between words */}
						<motion.span
							className="inline-block"
							key={index}
							variants={AnimationProps}
						>
							&nbsp;
						</motion.span>
					</React.Fragment>
				))}
			</motion.span>
		</div>
	);
};
export default StaggeredAnimationText;
