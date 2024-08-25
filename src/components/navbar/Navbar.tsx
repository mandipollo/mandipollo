import { FC } from "react";

const Navbar: FC<{ showNav: boolean }> = ({ showNav }) => {
	return (
		<nav
			className={` ${
				showNav ? "transform translate-y-0" : "transform -translate-y-full"
			} transition-transform z-10  bg-white/0 shadow-sm ring-black/5 backdrop-blur-sm sticky top-0 duration-300 text-sm w-full p-6 flex justify-between flex-row border-b border-opacity-15  border-gray-400`}
		>
			<ul className="flex justify-center items-start flex-row space-x-4">
				<li className=" flex flex-col">
					<p id="work" className="text-gray-400 ">
						Front End Developer
					</p>
					<p className="font-semibold">Mandipollo</p>
				</li>
			</ul>

			<a
				className=" hover:text-yellow-600"
				href="https://github.com/mandipollo/"
				target="blank"
			>
				Github
			</a>
		</nav>
	);
};

export default Navbar;
