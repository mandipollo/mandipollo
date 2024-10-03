import { FC, useEffect, useRef, useState } from "react";
import Introduction from "../components/homepage/Introduction";

import Projects from "../components/homepage/projects";
import About from "../components/homepage/About";

const HomePage: FC = () => {
	// find the path length of the line and give the offset the same length to hide it , when user scrolls minus the offset in % to the screen vh
	const [pathLength, setPathLength] = useState<number>(0);
	const [dashOffset, setDashOffset] = useState<number>(0);

	const pathRef = useRef<SVGPathElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (pathRef.current) {
				const length = pathRef.current.getTotalLength();
				setPathLength(length);
				setDashOffset(length);
				const scrollPercentage =
					window.scrollY /
					(window.document.documentElement.scrollHeight - window.innerHeight);

				const drawLength = Number.isNaN(scrollPercentage)
					? 0
					: length * scrollPercentage;

				setDashOffset(length - drawLength);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className="flex h-full flex-col  text-white ">
			<div className=" fixed top-0 left-0 w-full h-full text-center pointer-events-none">
				<svg
					fill="none"
					preserveAspectRatio="xMidYMax meet"
					className="inline-block h-full w-full"
					viewBox="0 0 2261 7004"
				>
					<path
						style={{ strokeDashoffset: dashOffset }}
						strokeDasharray={`${pathLength}  ${pathLength}`}
						ref={pathRef}
						strokeWidth={20}
						d="M1112.5 0V228C1169.44 415.361 1164.76 495.253 1112.5 605C1040.57 769.997 1043.23 862.503 1112.5 1027.5C1245.29 1306.11 1246.48 1525.96 1112.5 1742.5C883.911 2101.64 959.64 2317.98 1112.5 2648C1218.25 2871.25 1208.61 2913.05 1112.5 3144C1040.87 3292.22 1047.05 3379.23 1112.5 3539C1161.24 3663.08 1157.61 3730.11 1112.5 3846.5L990 4058H1230.5L1112.5 3860V4253V4588L684.5 4808.5L1112.5 4949L1507.5 4808.5L1112.5 4658.5L882 4808.5L1112.5 4866L1230.5 4808.5L1112.5 4738.5V5552L623.5 5938L362 5552L1472.5 5938L1852 5552L1112.5 5938L1.5 5552L362 6452L1472.5 6247.5L2260.5 5552L1112.5 6107.5V7004 "
						stroke="url(#paint0_linear_1_6)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_1_6"
							x1="1084.26"
							y1="228"
							x2="1084.26"
							y2="3846.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#55B855" />
							<stop offset="1" stopColor="#4AB6E7" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<Introduction />
			<Projects />
			<About />
		</main>
	);
};

export default HomePage;
