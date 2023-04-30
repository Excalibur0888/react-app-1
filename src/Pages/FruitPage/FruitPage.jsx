import React from "react";
import './FruitPage.css';
import Header from "./components/Header/Header";
import Containers from "./components/Grid_containers/Containers";
import Searching from "./components/Seacrh/Searching";
import { Helmet } from 'react-helmet';

const FruitPage = () => {
	return (
	<div className="FruitPage">
		<Helmet>
			<title>Fruits guide</title>
		</Helmet>
		<Header>
		<Searching/>
		</Header>
		<Containers/>
	</div>
	);
}
export default FruitPage;
