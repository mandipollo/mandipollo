import { FC } from "react";

const Navbar: FC = () => {
	return (
		<nav className=" text-sm w-full py-2 h-14 flex justify-between flex-row border-b border-opacity-15  border-gray-400">
			<ul className="flex justify-center items-start flex-row space-x-4">
				<li>
					<button id="work" className="text-gray-400 hover:text-yellow-600 ">
						Work
					</button>
					<p className="font-semibold">by Mandip Gurung</p>
				</li>
				<li className=" md:flex flex-col hidden">
					<button id="work" className="text-gray-400 hover:text-yellow-600 ">
						Front End Developer
					</button>
					<p className="font-semibold">Mandipollo</p>
				</li>
			</ul>

			<button className=" hover:text-yellow-600">MAIL</button>
		</nav>
	);
};

export default Navbar;
