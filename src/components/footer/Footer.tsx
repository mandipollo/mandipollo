import { ContactUs } from "./Contact";
import Copyright from "./Copyright";

const Footer = () => {
	return (
		<section className="flex md:flex-row flex-col gap-2">
			<ContactUs />
			<Copyright />
		</section>
	);
};

export default Footer;
