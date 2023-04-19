import React, { useState } from "react";
import './FruitPage.css';
import Header from "./components/Header/Header";
import Containers from "./components/Grid_containers/Containers";
import Searching from "./components/Seacrh/Searching";
import { Helmet } from 'react-helmet';

function FruitPage() {
	const[boxContent, setBoxContent] = useState([])
	const[valueCopy, setValueCopy] = useState([])
	const[visible, setvisible] = useState('')
	const[clicked, setClicked] = useState(false)
	const[fruitImages, setFruitImages] = useState([])
	return (
	<div className="FruitPage">
		<Helmet>
			<title>Fruits guide</title>
		</Helmet>
		<Header setvisible={setvisible} visible={visible} setClicked={setClicked} clicked={clicked}>
		<Searching visible={visible} value={boxContent} valueCopy={valueCopy} setValueCopy={setValueCopy} 
		clicked={clicked} funcSearching={setBoxContent}/>
		</Header>
		<Containers fruitImages={fruitImages} setFruitImages={setFruitImages} value={boxContent} valueCopy={valueCopy} setValueCopy={setValueCopy} funcsetBoxContent={setBoxContent}></Containers>
	</div>
	);
}
export default FruitPage;
