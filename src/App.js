import React, { useState } from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Containers from "./components/Grid_containers/Containers";
import Searching from "./components/Seacrh/Searching";
import ModalWindowUp from "./components/ModalWindow/ModalWindowUp";
import ModalWindowIn from "./components/ModalWindow/ModalWindowIn";

function App() {
	const [boxContent, setboxContent] = useState([
		'Apple', 'Orange (fruit)', 'Banana', 'Pineapple', 'Cherry', 'Mandarin', 'Raspberries', 'Melon', 'Watermelon', 'Strawberry', 'Grape', 'Blackberry', 'Lime', 'Coconut', 'Lemon'	]);
	const[visup, setvisup] = useState(true)
	const[visin, setvisin] = useState(true)
	return (
	<div className="App">
		<Header value={visup} funcup={setvisup} funcin={setvisin}>
		<Searching value={boxContent} func={setboxContent}/>
		</Header>
		<ModalWindowUp value={visup} func={setvisup}></ModalWindowUp>
		<ModalWindowIn value={visin} func={setvisin}></ModalWindowIn>
		<Containers value={boxContent}></Containers>
	</div>
  );
}
		
export default App;
