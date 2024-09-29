const Introduction = () => {
	return (
		<main className="flex justify-center flex-col items-center min-h-screen z-10">
			<section className=" flex w-full h-full gap-8 flex-col p-10 justify-center items-start">
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
					</div>
					<div className="flex space-x-2">
						<span className="h-2 w-60 bg-gradient-to-r from-slate-400 to-slate-400"></span>
						<div className="h-10 w-10 flex">
							<span className="h-4 w-[1px] bg-gradient-to-r from-purple-400 to-orange-400 -translate-y-2 translate-x-3 rotate-45"></span>
							<span className="h-6 w-[1px] bg-gradient-to-r from-green-400 to-cyan-400  -translate-y-1 translate-x-4 rotate-90"></span>
							<span className="h-4 w-[1px] bg-gradient-to-r from-pink-400 to-cyan-400 -translate-y-2 translate-x-5 -rotate-45"></span>
						</div>
						<span className="h-2 w-6 md:w-20 bg-gradient-to-r from-green-400 to-cyan-400"></span>
					</div>
				</div>
				<div>
					<h2 className="text-6xl text-white">Mandip Gurung</h2>
					<p className="text-lg text-white">Frontend Developer</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex space-x-2">
						<span className="h-2 w-40 bg-gradient-to-r from-yellow-400 to-orange-400"></span>
						<span className="h-2 w-10 bg-gradient-to-r from-purple-400 to-cyan-400"></span>
						<span className="h-2 w-2 bg-gradient-to-r from-pink-400 to-cyan-400"></span>
					</div>
					<div className="flex space-x-2">
						<span className="h-2 w-20 bg-gradient-to-r from-purple-400 to-orange-400"></span>
						<span className="h-2 w-2 bg-gradient-to-r rounded-full from-slate-400 to-slate-400"></span>
						<span className="h-2 w-40 md:w-60 bg-gradient-to-r from-green-400 to-cyan-400"></span>
					</div>
					<div className="flex space-x-2">
						<span className="h-2 w-10 bg-gradient-to-r from-green-400 to-cyan-400"></span>
						<span className="h-2 w-60 bg-gradient-to-r from-slate-400 to-slate-400"></span>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Introduction;
