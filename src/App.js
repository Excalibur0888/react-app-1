import React, { useState } from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Containers from "./components/Grid_containers/Containers";
import Searching from "./components/Seacrh/Searching";
import ModalWindowUp from "./components/ModalWindow/Sign up/ModalWindowUp";
import ModalWindowIn from "./components/ModalWindow/Sign in/ModalWindowIn";

function App() {
	const[boxContent, setBoxContent] = useState([])
	const[valueCopy, setValueCopy] = useState([])
	const[visup, setVisup] = useState(true)
	const[visin, setVisin] = useState(true)
	const[visible, setvisible] = useState('')
	const[clicked, setClicked] = useState(false)
	const[heading, setHeading] = useState('')
	const[isScrollingAllowed, setisScrollingAllowed] = useState(true)
	const[fruitImages, setFruitImages] = useState([])

	return (
	<div className="App">
		<Header setvisible={setvisible} visible={visible} value={visup} funcup={setVisup} funcin={setVisin} 
		funcscroll={setisScrollingAllowed} scr={isScrollingAllowed} heading={heading} setClicked={setClicked} clicked={clicked}>
		<Searching visible={visible} value={boxContent} valueCopy={valueCopy} setValueCopy={setValueCopy} 
		clicked={clicked} funcSearching={setBoxContent}/>
		</Header>
		<ModalWindowUp value={visup} funcsetvisup={setVisup} funcscroll={setisScrollingAllowed}>✖</ModalWindowUp>
		<ModalWindowIn value={visin} funcsetvisin={setVisin} funcscroll={setisScrollingAllowed} setheading={setHeading}>✖</ModalWindowIn>
		<Containers fruitImages={fruitImages} setFruitImages={setFruitImages} value={boxContent} valueCopy={valueCopy} setValueCopy={setValueCopy} funcsetBoxContent={setBoxContent}></Containers>
	</div>
  );
}
		
export default App;
