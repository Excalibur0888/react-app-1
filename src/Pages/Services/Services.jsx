import React from "react";
import './Services.css';
import Header from "../../components/Header";
import Containers from "./components/Containers/Containers";
import Searching from "./components/Seacrh/Searching";

const Services = () => {
	return (
	<div className="Services">

		<Header>
		<Searching/>
		</Header>
		<Containers/>
	</div>
	);
}
export default Services;
