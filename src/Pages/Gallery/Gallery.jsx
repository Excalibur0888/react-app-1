import React from "react";
import './Gallery.css';
import Header from "../../components/Header";
import Containers from "./components/Containers/Containers";
import Searching from "./components/Seacrh/Searching";

const Gallery = () => {
	return (
	<div className="Gallery">
		<Header>
		<Searching/>
		</Header>
		<Containers/>
	</div>
	);
}
export default Gallery;
