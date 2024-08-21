import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
const Root = () => {
	const [showNav, setShowNav] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	const controlNavbar = () => {
		if (window !== undefined) {
			// if scroll down

			if (window.scrollY > lastScrollY) {
				setShowNav(false);
			} else {
				setShowNav(true);
			}
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);

	return (
		<main className="flex relative flex-col  w-screen ">
			<Navbar showNav={showNav} />
			<section className="p-6 ">
				<Outlet />
			</section>
		</main>
	);
};

export default Root;
