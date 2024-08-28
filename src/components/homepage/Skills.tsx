import GridBackground from "../GridBackground";

const Skills = () => {
	return (
		<main className="flex relative md:flex-row flex-col  p-2 md:py-20   ">
			<GridBackground />
			<section className="flex flex-col h-full md:w-1/2  md:sticky top-20  ">
				<h1 className="md:text-5xl text-2xl flex justify-center">Skills</h1>
			</section>
			<section className="flex  flex-1 w-full  text-gray-400">
				<ul className="flex flex-col space-y-2 font-extralight">
					<li>HTML5</li>
					<li>CSS</li>
					<li>Tailwind css</li>
					<li>Material-UI</li>
					<li>Framer motion</li>
					<li>Javascript</li>
					<li>Typescript</li>
					<li>React</li>
					<li>Redux/toolkit</li>
					<li>React-router</li>
					<li>Firebase</li>
					<li>Git</li>
					<li>Jest/React-testing-library</li>
				</ul>
			</section>
		</main>
	);
};

export default Skills;
