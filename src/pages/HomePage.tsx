import { FC, useEffect, useRef, useState } from "react";

import Introduction from "../components/homepage/Introduction";
import Projects from "../components/homepage/projects";
import About from "../components/homepage/About";
import Footer from "../components/footer/Footer";

const HomePage: FC = () => {
	// find the path length of the line and give the offset the same length to hide it , when user scrolls minus the offset in % to the screen vh
	const [pathLength, setPathLength] = useState<number>(0);
	const [dashOffset, setDashOffset] = useState<number>(0);
	const [scrollY, setScrollY] = useState<number>(0);

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

				setScrollY(scrollPercentage);
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
		<main className="flex h-full flex-col text-white ">
			<section className="fixed top-0 left-0 w-full h-full text-center pointer-events-none">
				<svg
					preserveAspectRatio="xMidYMax meet"
					className="inline-block h-full w-full"
					viewBox="0 0 145 2485"
					fill="none"
				>
					<path
						style={{ strokeDashoffset: dashOffset }}
						strokeDasharray={`${pathLength}  ${pathLength}`}
						ref={pathRef}
						strokeWidth={10}
						d="M42.5 0.5C53.3227 48.5731 52.0607 76.5581 42.5 127.5C22.5613 191.53 25.3266 226.347 42.5 287.5C65.0782 362.354 63.1031 405.288 42.5 483C5.34941 606.417 5.93063 673.123 42.5 788C111.216 958.985 113.657 1056.32 42.5 1233C-13.3113 1370.27 -12.4202 1447.23 42.5 1584.5C79.6702 1691.14 79.6442 1753.32 42.5 1868.5C16.4948 1944.28 17.5259 1988.52 42.5 2070C50.9656 2105.85 51.4421 2128.75 42.5 2176V2394.5H144L42.5 2423.5V2484.5"
						stroke="url(#paint0_linear_2_2)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_2_2"
							x1="72.4875"
							y1="0.5"
							x2="72.4875"
							y2="2484.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF0000" />
							<stop offset="1" stopColor="#00FF80" />
						</linearGradient>
					</defs>
				</svg>
			</section>
			<Introduction />
			<Projects />
			<About />
			<Footer scrollY={scrollY} />
		</main>
	);
};

export default HomePage;
