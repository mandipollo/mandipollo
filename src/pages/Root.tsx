import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
const Root = () => {
	return (
		<main className="flex flex-col  w-screen p-6 ">
			<Navbar />

			<section>
				<Outlet />
			</section>
		</main>
	);
};

export default Root;
