import React from "react";
import './Reviews.css';
import Header from "../../components/Header";
import Containers from "./components/Containers/Containers";
import Searching from "./components/Seacrh/Searching";

const Reviews = () => {
	return (
	<div className="Reviews">
		<Header>
		<Searching/>
		</Header>
		<Containers/>
	</div>
	);
}
export default Reviews;
