import React from "react";
import './Trees.css';
import Header from "./components/Header/Header";
import Containers from "./components/Containers/Containers";
import Searching from "./components/Seacrh/Searching";
import { Helmet } from 'react-helmet';

const Trees = () => {
	return (
	<div className="Trees">
		<Helmet>
			<title>Trees guide</title>
		</Helmet>
		<Header>
		<Searching/>
		</Header>
		<Containers/>
	</div>
	);
}
export default Trees;
