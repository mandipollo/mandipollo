import React, { FC, useState } from "react";
import { motion } from "framer-motion";

const AnimatedSlider: FC<{ images: string[] }> = ({ images }) => {
	const [positionIndex, setPositionIndex] = useState<number>(0);

	const handleNext = () => {
		setPositionIndex(prevIndex => (prevIndex + 1) % images.length);
	};

	const handleBack = () => {
		setPositionIndex(
			prevIndex => (prevIndex - 1 + images.length) % images.length
		);
	};

	const getPosition = (index: number) => {
		const diff = (index - positionIndex + images.length) % images.length;
		switch (diff) {
			case 0:
				return "center";
			case 1:
				return "right";
			case images.length - 1:
				return "left";
			default:
				return "hidden";
		}
	};

	const imageVariants = {
		center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
		left: { x: "-50%", scale: 0.5, zIndex: 2, opacity: 0.5 },
		right: { x: "50%", scale: 0.5, zIndex: 1, opacity: 0.5 },
		hidden: { x: "0%", scale: 0, zIndex: 0, opacity: 0 },
	};
	return (
		<div className="relative flex flex-1  justify-center items-center flex-col  bg-gray-400">
			<div className="relative flex bg-yellow-400 justify-center items-center w-96 h-96 overflow-hidden">
				{images.map((image, index) => (
					<motion.img
						key={index}
						src={image}
						alt={`Slide ${index}`}
						className="absolute w-20 h-40 top-10 left-10 rounded-md"
						initial="hidden"
						animate={getPosition(index)}
						variants={imageVariants}
						transition={{ duration: 0.5 }}
						style={{ width: "1000%" }}
					/>
				))}
			</div>
			<div className="flex justify-center gap-3 mt-4">
				<button
					className="text-white bg-indigo-400 rounded-md py-2 px-4"
					onClick={handleBack}
				>
					Back
				</button>
				<button
					className="text-white bg-indigo-400 rounded-md py-2 px-4"
					onClick={handleNext}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default AnimatedSlider;
