import { FC, useEffect, useRef, useState } from "react";
import Introduction from "../components/homepage/Introduction";

import Projects from "../components/homepage/projects";
import About from "../components/homepage/About";

const HomePage: FC = () => {
	// find the path length of the line and give the offset the same length to hide it , when user scrolls minus the offset in % to the screen vh
	const [pathLength, setPathLength] = useState<number>(0);
	const [dashOffset, setDashOffset] = useState<number>(0);

	const pathRef = useRef<SVGPathElement>(null);

	// window.addEventListener("scroll", () => {
	// 	console.log("scroll");
	// });
	// main issue the scroll listener does not fire event

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
					viewBox="0 0 395 2336"
					fill="none"
					preserveAspectRatio="xMidYMax meet"
					className="inline-block h-full w-full"
				>
					<g filter="url(#filter0_d_1_7)">
						<path
							style={{ strokeDashoffset: dashOffset }}
							strokeDasharray={`${pathLength}  ${pathLength}`}
							ref={pathRef}
							strokeWidth={10}
							d="M209 0V206C222.662 242.951 231.997 251.103 251 248C277.655 237.934 280.834 229.496 272 211C211.965 204.543 175.818 220.146 179 253C195.819 250.77 203.699 249.485 209 226V296V359C159.867 421.484 164.369 456.516 209 519C261.393 587.67 260.784 618.844 209 658C157.319 722.648 153.781 755.715 209 807C284.859 884.372 282.545 930.955 209 1019C157.417 1108.19 159.364 1159.24 209 1249V1583V1854C233.501 1919.21 257.835 1942.22 321 1958C380.806 1945.89 394.254 1921.89 389 1854C246.611 1847.03 183.117 1873.47 90 1958C11.5057 1955.05 -7.38621 1933.7 12 1854C244.332 1773.36 325.497 1816.99 389 2042C302.633 2098.5 134.338 2074.01 209 2127C229.35 2244.35 226.429 2282.51 209 2327"
							stroke="#F24040"
							shapeRendering="geometricPrecision"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_1_7"
							x="0.450378"
							y="0"
							width="394.09"
							height="2335.18"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_1_7"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_1_7"
								result="shape"
							/>
						</filter>
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
