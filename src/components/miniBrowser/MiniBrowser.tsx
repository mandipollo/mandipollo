import React from "react";

const MiniBrowser: React.FC<{
	url: string | null;
}> = ({ url }) => {
	if (!url) {
		return (
			<main className="flex justify-center items-center h-full w-full">
				<p>Click on the projects to preview </p>
			</main>
		);
	}

	return (
		<main className="flex flex-col justify-center items-center h-full w-full">
			<iframe src={url} className="w-full h-full bg-white" />
		</main>
	);
};

export default MiniBrowser;
