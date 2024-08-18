import Introduction from "../components/homepage/Introduction";
import { FC } from "react";

import Projects from "../components/homepage/Projects";
const HomePage: FC = () => {
	return (
		<main className="flex flex-col space-y-10">
			<Introduction />
			<Projects />
		</main>
	);
};

export default HomePage;
