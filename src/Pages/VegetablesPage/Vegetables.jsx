import React from "react";
import './Vegetables.css';
import Header from "../../components/Header";
import Containers from "./components/Containers/Containers";
import Searching from "./components/Seacrh/Searching";
import { Helmet } from 'react-helmet';

const Vegetables = () => {
	return (
	<div className="Vegetables">
		<Helmet>
			<title>Vegetables guide</title>
		</Helmet>
		<Header>
		<Searching/>
		</Header>
		<Containers/>
	</div>
	);
}
export default Vegetables;
