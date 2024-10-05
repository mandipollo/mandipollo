import { useState } from "react";
import githubSvg from "../../assets/github.svg";
import outSvg from "../../assets/out.svg";
import MiniBrowser from "../miniBrowser/MiniBrowser";

const Projects = () => {
	const [url, setUrl] = useState<string | null>(null);

	const handleUrl = (u: string) => {
		setUrl(u);
	};
	return (
		<main className="relative  flex flex-row min-h-screen z-10 text-white p-10 gap-10 ">
			<section className="md:w-1/2 md:flex hidden">
				<MiniBrowser url={url || null} />
			</section>
			<section className=" flex  justify-center  flex-col gap-10">
				<header className="flex">
					<div className="text-4xl flex-col inline-flex ">
						<p className="flex items-center">
							PR
							<span className="w-8 h-8  inline-block rounded-full bg-gradient-to-r from-yellow-400 to-red-400"></span>
							JECTS
						</p>

						<span className="inline-block h-2 bg-gradient-to-r from-cyan-400 to-purple-400"></span>
					</div>
				</header>
				<section className=" flex flex-col gap-8 ">
					<div className="flex">
						<div
							onClick={() => handleUrl("https://lumishade.netlify.app/")}
							className="text-slate-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-25 flex flex-col rounded-md gap-2 p-2"
						>
							<div className="flex flex-row space-x-2 items-center">
								<h3 className="text-2xl">Lumishade</h3>
								<a
									href="https://github.com/mandipollo/lumishade"
									target="_blank"
								>
									<img src={githubSvg} alt="github" width={20} height={20} />
								</a>
								<a href="https://lumishade.netlify.app/" target="_blank">
									<img src={outSvg} alt="github" width={20} height={20} />
								</a>
							</div>
							<article className="text-slate-400">A Skincare demo site</article>
							<ul className="flex flex-row gap-2 text-[10px]">
								<li className="bg-slate-400 flex p-1">TYPESCRIPT</li>
								<li className="bg-slate-400 flex p-1">REACT</li>
								<li className="bg-slate-400 flex p-1">NEXTJS</li>
								<li className="bg-slate-400 flex p-1">FRAMER MOTION</li>
								<li className="bg-slate-400 flex p-1">TAILWIND</li>
							</ul>
						</div>
					</div>

					<div className="flex">
						<div
							onClick={() => handleUrl("https://taskdom.web.app/")}
							className="text-slate-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-25 flex flex-col rounded-md gap-2 p-2"
						>
							<div className="flex flex-row space-x-2 items-center">
								<h3 className="text-2xl">Taskdom</h3>
								<a href="https://github.com/mandipollo/taskdom" target="_blank">
									<img src={githubSvg} alt="github" width={20} height={20} />
								</a>
								<a href="https://taskdom.web.app/" target="_blank">
									<img src={outSvg} alt="github" width={20} height={20} />
								</a>
							</div>
							<article className="text-slate-400">
								Project collabaration app with instant messaging.
							</article>
							<ul className="flex flex-row gap-2 text-[10px]">
								<li className="bg-slate-400 flex p-1">TYPESCRIPT</li>
								<li className="bg-slate-400 flex  p-1">REACT</li>
								<li className="bg-slate-400 flex p-1">GOOGLE CLOUD</li>
								<li className="bg-slate-400 flex p-1">TAILWIND</li>
							</ul>
						</div>
					</div>

					<div className="flex">
						<div
							onClick={() => handleUrl("https://estate-2aef8.web.app/")}
							className="text-slate-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-25 flex flex-col rounded-md gap-2 p-2"
						>
							<div className="flex flex-row space-x-2 items-center">
								<h3 className="text-2xl">Estate</h3>
								<a
									href="https://github.com/mandipollo/estateFrontend"
									target="_blank"
								>
									<img src={githubSvg} alt="github" width={20} height={20} />
								</a>
								<a href="https://estate-2aef8.web.app/" target="_blank">
									<img src={outSvg} alt="github" width={20} height={20} />
								</a>
							</div>
							<article className="text-slate-400">
								Property search app fetches data from Rightmove.
							</article>
							<ul className="flex flex-row gap-2 text-[10px]">
								<li className="bg-slate-400 flex  p-1">REACT</li>
								<li className="bg-slate-400 flex p-1">GOOGLE CLOUD</li>
								<li className="bg-slate-400 flex p-1">MATERIAL-UI</li>
								<li className="bg-slate-400 flex p-1">RIGHTMOVE API</li>
							</ul>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};

export default Projects;
