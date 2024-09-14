import React from "react";
import './About.css';
import Header from "../../components/Header";
import Containers from "./components/Grid_containers/Containers";
import Searching from "./components/Seacrh/Searching";

const About = () => {
	return (
	<div className="About">
		<Header>
		<Searching/>
		</Header>
		<Containers/>
	</div>
	);
}
export default About;
