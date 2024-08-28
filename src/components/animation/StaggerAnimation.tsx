import React, { FC } from "react";
import { motion } from "framer-motion";

const StaggeredAnimationText: FC<{ text: string; className: string }> = ({
	text,
	className,
}) => {
	//   to easily reuse the animation props
	const AnimationProps = {
		initial: { opacity: 0, y: 0 },
		animate: { opacity: 1, y: 0 },
	};
	return (
		<h1>
			{/* staggered text animations */}
			{/* for screen readers */}
			<span className="sr-only">{text}</span>
			{/* for animation purposes and users */}
			{/* use the initial and animate states from AnimateProps */}
			<motion.span
				arial-hidden="true"
				className={className}
				initial="initial"
				animate="animate"
				transition={{ staggerChildren: 0.11 }}
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
		</h1>
	);
};
export default StaggeredAnimationText;
