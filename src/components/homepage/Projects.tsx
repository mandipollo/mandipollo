import React, { FC } from "react";

const Projects: FC = () => {
	return (
		<section className="flex relative md:flex-row flex-col border-y md:p-20 p-2  border-opacity-5  ">
			<section className="flex h-20 md:w-1/2  md:sticky top-20 md:justify-center">
				<p className="md:text-6xl text-4xl">Projects.</p>
			</section>
			<section className="flex md:w-1/2 text-gray-400">
				<ul className="space-y-10">
					<li className=" space-y-10">
						<p className="text-black">Taskdom.</p>
						<p>
							Taskdom A project management application built using TypeScript,
							React, Tailwind CSS, HTML, Redux Toolkit, React Router, and
							Firebase. This application allows users to manage projects, add or
							remove team members, and assign tasks, all with real-time updates.
							Features User Authentication: Secure authentication using Firebase
							Auth. Project Management: Create and manage projects, tasks,
							including adding and removing team members. Task Assignment:
							Assign tasks to team members, track progress, and manage
							deadlines. Real-Time Updates: All changes are reflected in
							real-time using Firebase Firestore and Cloud Functions. Responsive
							Design: Responsive and modern UI using Tailwind CSS. Technologies
							Used TypeScript: For type safety and robust codebase. React:
							Frontend library for building user interfaces. Tailwind CSS:
							Utility-first CSS framework for styling. Redux Toolkit: For state
							management. React Router: For navigation within the app. Firebase:
							Backend services including: Firebase Auth: User authentication.
							Firebase Firestore: Real-time database for storing projects and
							tasks. Firebase Storage: Storage for user files and project
							assets.
						</p>
					</li>
					<li className=" space-y-10">
						<p className="text-black">Estate.</p>
						<p>
							Autocomplete Search: Utilizes the Rapid API to provide
							autocomplete suggestions as users search for properties. Filtering
							Options: Users can filter properties based on criteria such as
							price, number of bedrooms, property type, and more. User
							Authentication: Integration with Firebase Authentication ensures
							secure user authentication. Realtime Database: Firebase Realtime
							Database is used to store and retrieve property data and user
							information. Save and Remove Properties: Users can save properties
							for later reference and remove them as needed. User Page: A
							dedicated user page allows users to view their saved properties.
							Server Response Time: Please note that the server response time,
							especially when querying the Rapid API for property data, is
							substantial, often exceeding 7000ms. Error Handling: Ongoing
							improvements in error handling are being implemented to enhance
							the app's robustness. Some error scenarios may still exist.
							Technologies Used React Redux Toolkit Material-UI (MUI) Firebase
							Cloud Functions Firebase Realtime Database Firebase Authentication
						</p>
					</li>
				</ul>
			</section>
		</section>
	);
};

export default Projects;
