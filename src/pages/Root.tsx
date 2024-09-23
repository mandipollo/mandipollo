import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<main className="flex relative flex-col w-screen overflow-auto ">
			<section className="bg-[#19252A] relative">
				<Outlet />
			</section>
		</main>
	);
};

export default Root;
