import { FC, useEffect, useRef, useState } from "react";
import Introduction from "../components/homepage/Introduction";
import { motion, useScroll, useTransform } from "framer-motion";
import Projects from "../components/homepage/projects";
import About from "../components/homepage/About";

const HomePage: FC = () => {
	const [pathLength, setPathLength] = useState<number>(0);
	const ref = useRef<SVGPathElement | null>(null);

	useEffect(() => {
		if (ref.current) {
			const length = ref.current.getTotalLength();
			console.log(length);
			setPathLength(length);
		}
	}, []);

	const { scrollYProgress } = useScroll();

	const strokeDashoffset = useTransform(
		scrollYProgress,
		[0, 1],
		[0, pathLength]
	);
	console.log(strokeDashoffset);

	return (
		<main className="flex flex-col relative  ">
			<div className="flex fixed top-0 left-0 h-full w-full justify-center items-center overflow-hidden">
				<svg
					preserveAspectRatio="xMidYMax meet"
					viewBox="0 0 811 2275"
					fill="none"
					className="h-full inline-block"
				>
					<g filter="url(#filter0_d_2_9)">
						<motion.path
							strokeWidth={2}
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 10 }}
							d="M369.999 1C369.999 1 206.999 275 369.999 324C532.999 373 440.999 453 369.999 523C299 593 336.999 622 369.999 642C403 662 369.999 749.837 369.999 769.918C369.999 790 369.999 1095 369.999 1095C369.999 1095 586 1325 686 1271C786 1217 806 1157 806 1157C806 1157 792 1077 686 1077C580 1077 236 1299 106 1271C-24 1243 8.00002 1157 8.00002 1157C8.00002 1157 30 1077 106 1077C182 1077 500 1337 566 1349C632 1361 642 1299 642 1299C642 1299 696 1219 566 1187C436 1155 248 1349 182 1349C116 1349 126 1299 126 1299C126 1299 122 1231 182 1219C242 1207 369.999 1313 369.999 1313C369.999 1313 444 1385 369.999 1509C295.999 1633 369.999 1675 369.999 2267"
							stroke="#F24040"
							shape-rendering="crispEdges"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_2_9"
							x="0.017395"
							y="0.747314"
							width="810.497"
							height="2274.25"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
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
								result="effect1_dropShadow_2_9"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_2_9"
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
