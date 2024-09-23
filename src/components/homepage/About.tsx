const About = () => {
	const techStacks = [
		{
			id: 1,
			tech: "HTML5",
		},
		{
			id: 2,
			tech: "CSS",
		},
		{
			id: 3,
			tech: "TAILWIND",
		},
		{
			id: 4,
			tech: "MATERIAL-UI",
		},
		{
			id: 5,
			tech: "STYLED-COMPONENT",
		},
		{
			id: 6,
			tech: "JAVASCRIPT",
		},
		{
			id: 7,
			tech: "TYPESCRIPT",
		},
		{
			id: 8,
			tech: "REACT",
		},

		{
			id: 10,
			tech: "FRAMER MOTION",
		},
		{
			id: 11,
			tech: "GOOGLE CLOUD",
		},
		{
			id: 12,
			tech: "GIT",
		},
	];
	return (
		<main className="flex flex-col gap-10 text-white min-h-screen z-10 p-10 ">
			<header className="flex  ">
				<h2 className="flex items-center text-4xl flex-col">
					<p>
						Hi , I`m{" "}
						<span className="inline-block h-6 w-[4px] bg-gradient-to-r from-green-400 to-cyan-400"></span>
						<span className="inline-block h-4 -rotate-45 -translate-y-3 w-[4px] bg-gradient-to-r from-red-400 to-purple-400"></span>
						<span className="inline-block h-4 rotate-45 -translate-y-3 translate-x-2 w-[4px] bg-gradient-to-r from-gray-400 to-cyan-400"></span>
						<span className="inline-block h-6 w-[4px] translate-x-2 bg-gradient-to-r from-red-400 to-cyan-400"></span>{" "}
						andip G
						<span className="inline-block h-6 w-[4px] bg-gradient-to-r from-pink-400 to-cyan-400"></span>
						<span className="inline-block h-[4px] w-[8px] bg-gradient-to-r from-slate-400 to-cyan-400"></span>
						<span className="inline-block h-6 w-[4px] bg-gradient-to-r from-green-400 to-cyan-400"></span>
						rung.
					</p>

					<span className="inline-block w-full h-2 bg-gradient-to-r from-yellow-400 to-purple-400"></span>
				</h2>
			</header>
			<section className="flex">
				<p className="flex text-slate-400">
					I`m a Frontend developer from Farnborough , UK. <br /> I love to
					create minimilistic visually appealing web apps.
				</p>
			</section>
			<section className=" flex h-full gap-8 flex-col  ">
				<h5 className="text-2xl">Tech Stacks</h5>
				<ul className="text-sm text-slate-400">
					{techStacks.map(tech => (
						<li key={tech.id}>{tech.tech}</li>
					))}
				</ul>

				<h5 className="text-2xl">Currently Learning</h5>
				<ul className="text-sm text-slate-400">
					<li>Nextjs</li>
					<li>Nodejs</li>
					<li>GSAP</li>
				</ul>
			</section>
		</main>
	);
};

export default About;
