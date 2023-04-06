import React, { useState } from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Containers from "./components/Grid_containers/Containers";
import Searching from "./components/Seacrh/Searching";
import ModalWindowUp from "./components/ModalWindowUp/ModalWindowUp";

function App() {
	const [boxContent, setboxContent] = useState([
		'Apple', 'Orange', 'Banana', 'Pineapple', 'Cherry', 'Tomato', 'Cucumber', 'Melon', 'Watermelon', 'Strawberry', 'Grape', 'Avocado', 'Lime', 'Coconut', 'Lemon'	]);
  return (
    <div className="App">
			<Header>
			<Searching value={boxContent} func={setboxContent}/>
			</Header>
			<ModalWindowUp></ModalWindowUp>
			<Containers value={boxContent}></Containers>
    </div>
  );
}
		
export default App;
