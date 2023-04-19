import React from "react";
import FruitPage from './Pages/FruitPage/FruitPage'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/fruits" element={<FruitPage />} />
			<Route exact path="/login" element={<LoginPage />} />
			<Route exact path="/register" element={<RegisterPage />} />
		</Routes>
	)
}

export default App;
