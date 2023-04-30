import React from "react";
import './Flowers.css';

import Header from "./components/Header/Header";
import Containers from "./components/Containers/Containers";
import Searching from "./components/Seacrh/Searching";
import { Helmet } from 'react-helmet';

const Flowers = () => {
	return (
	<div className="Flowers">
		<Helmet>
			<title>Flowers guide</title>
		</Helmet>
		<Header>
		<Searching/>
		</Header>
		<Containers/>
	</div>
	);
}
export default Flowers;
