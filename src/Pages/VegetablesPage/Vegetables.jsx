import React, { useState } from "react";
import './Vegetables.css';

import Header from "./components/Header/Header";
import Containers from "./components/Containers/Containers";
import Searching from "./components/Seacrh/Searching";
import { Helmet } from 'react-helmet';

const Vegetables = () => {
	const[boxContent, setBoxContent] = useState([])
	const[valueCopy, setValueCopy] = useState([])
	const[visible, setvisible] = useState('')
	const[clicked, setClicked] = useState(false)
	const[vegetablesImages, setvegetablesImages] = useState([])

	return (
	<div className="Vegetables">
		<Helmet>
			<title>Vegetables guide</title>
		</Helmet>
		<Header setvisible={setvisible} visible={visible} setClicked={setClicked} clicked={clicked}>
		<Searching visible={visible} value={boxContent} valueCopy={valueCopy} setValueCopy={setValueCopy} 
		clicked={clicked} funcSearching={setBoxContent}/>
		</Header>
		<Containers vegetablesImages={vegetablesImages} setvegetablesImages={setvegetablesImages} value={boxContent} valueCopy={valueCopy} setValueCopy={setValueCopy} funcsetBoxContent={setBoxContent}></Containers>
	</div>
	);
}
export default Vegetables;
