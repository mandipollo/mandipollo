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
		{ id: 9, tech: "REACT-ROUTER" },
		{
			id: 10,
			tech: "REDUXJS/TOOLKIT",
		},

		{
			id: 11,
			tech: "FRAMER MOTION",
		},
		{
			id: 12,
			tech: "GOOGLE CLOUD",
		},
		{
			id: 13,
			tech: "GIT",
		},
	];
	return (
		<main className="flex flex-col gap-10 text-white min-h-screen p-10 z-10 ">
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
				<article className="flex flex-col text-slate-400">
					<p> Frontend developer based in Farnborough , UK.</p>
					<div className="flex flex-row">
						<p> You`ll usually find me charged with coffee</p>
						<iframe
							className="h-10 w-10"
							src="https://giphy.com/embed/XEOdmFHVznCerkI6CI"
						></iframe>
					</div>
					<div className="flex flex-row">
						<p>trying to center the div</p>
						<iframe
							src="https://giphy.com/embed/MdA16VIoXKKxNE8Stk"
							className="h-10 w-10"
						></iframe>
					</div>
					<div className="flex flex-row">
						<p>or on my</p>
						<iframe
							src="https://giphy.com/embed/5Gwqx1lYbDwAg"
							className="h-20 w-20"
						></iframe>
					</div>
				</article>
			</section>
			<section className=" flex h-full gap-8 flex-col  ">
				<h5 className="text-2xl">Tech Stack</h5>
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
				<div className="flex flex-col gap-2">
					<div className="flex space-x-2">
						<span className="h-2 w-40 bg-gradient-to-r from-yellow-400 to-orange-400 "></span>
						<span className="h-2 w-10 bg-gradient-to-r from-purple-400 to-cyan-400"></span>
						<span className="h-2 w-2 bg-gradient-to-r from-pink-400 to-cyan-400"></span>
					</div>
					<div className="flex space-x-2">
						<span className="h-2 w-20 bg-gradient-to-r from-purple-400 to-orange-400"></span>
						<span className="h-2 w-10 bg-gradient-to-r from-green-400 to-cyan-400"></span>
						<span className="h-2 w-2 bg-gradient-to-r rounded-full from-slate-400 to-slate-400"></span>
						<span className="h-2 w-6 md:w-20 bg-gradient-to-r from-green-400 to-cyan-400"></span>
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
