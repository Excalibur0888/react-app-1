import React, { useState } from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Containers from "./components/Grid_containers/Containers";
import Searching from "./components/Seacrh/Searching";
import ModalWindowUp from "./components/ModalWindow/ModalWindowUp";
import ModalWindowIn from "./components/ModalWindow/ModalWindowIn";

function App() {
	const [boxContent, setboxContent] = useState([
		'Apple', 'Orange (fruit)', 'Banana', 'Pineapple', 'Cherry', 'Strawberry', 'Raspberries', 'Melon', 'Watermelon', 'Mandarin (orange)', 'Grape', 'Blackberry', 'Lemon', 'Coconut', 'Lime (fruit)'	]);
	const[visup, setvisup] = useState(true)
	const[visin, setvisin] = useState(true)
	const[heading, setheading] = useState('')
	const[isScrollingAllowed, setisScrollingAllowed] = useState(true)

	return (
	<div className="App">
		<Header value={visup} funcup={setvisup} funcin={setvisin} funcscroll={setisScrollingAllowed} scr={isScrollingAllowed} heading={heading}>
		<Searching value={boxContent} func={setboxContent}/>
		</Header>
		<ModalWindowUp value={visup} funcsetvisup={setvisup} funcscroll={setisScrollingAllowed}>✖</ModalWindowUp>
		<ModalWindowIn value={visin} funcsetvisin={setvisin} funcscroll={setisScrollingAllowed} setheading={setheading}>✖</ModalWindowIn>
		<Containers value={boxContent}></Containers>
	</div>
  );
}
		
export default App;
