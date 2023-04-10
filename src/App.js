import React, { useState } from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Containers from "./components/Grid_containers/Containers";
import Searching from "./components/Seacrh/Searching";
import ModalWindowUp from "./components/ModalWindow/ModalWindowUp";
import ModalWindowIn from "./components/ModalWindow/ModalWindowIn";

function App() {
	const[boxContent, setBoxContent] = useState([])
	const[valueCopy, setValueCopy] = useState([])
	const[visup, setVisup] = useState(true)
	const[visin, setVisin] = useState(true)
	const[heading, setHeading] = useState('')
	const[isScrollingAllowed, setisScrollingAllowed] = useState(true)

	return (
	<div className="App">
		<Header value={visup} funcup={setVisup} funcin={setVisin} funcscroll={setisScrollingAllowed} scr={isScrollingAllowed} heading={heading}>
		<Searching value={boxContent} valueCopy={valueCopy} setValueCopy={setValueCopy} funcSearching={setBoxContent}/>
		</Header>
		<ModalWindowUp value={visup} funcsetvisup={setVisup} funcscroll={setisScrollingAllowed}>✖</ModalWindowUp>
		<ModalWindowIn value={visin} funcsetvisin={setVisin} funcscroll={setisScrollingAllowed} setheading={setHeading}>✖</ModalWindowIn>
		<Containers value={boxContent} setValueCopy={setValueCopy} funcsetBoxContent={setBoxContent}></Containers>
	</div>
  );
}
		
export default App;
