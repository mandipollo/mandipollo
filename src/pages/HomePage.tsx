import Introduction from "../components/homepage/Introduction";
import { FC } from "react";

import Projects from "../components/homepage/Projects";
import Footer from "../components/footer/Footer";
import Skills from "../components/homepage/Skills";
const HomePage: FC = () => {
	return (
		<main className="flex flex-col space-y-10">
			<Introduction />
			<Skills />
			<Projects />
			<Footer />
		</main>
	);
};

export default HomePage;
