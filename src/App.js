import React, {useEffect} from "react";
import FruitPage from './Pages/FruitPage/FruitPage'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import Help from "./Pages/Help/Help";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from './store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './App.css'
import Vegetables from "./Pages/VegetablesPage/Vegetables";
import Flowers from "./Pages/FlowersPage/Flowers";
import Trees from "./Pages/TreesPage/Trees"
import Profile from "./Pages/Profile/Profile";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const storedEmail = sessionStorage.getItem("email");
		const storedPassword = sessionStorage.getItem("password");
		if (storedEmail && storedPassword) {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, storedEmail, storedPassword)
				.then(({user}) => {
					dispatch(setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					}));
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, []);
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/fruits" element={<FruitPage />} />
			<Route exact path="/vegetables" element={<Vegetables />} />
			<Route exact path="/login" element={<LoginPage />} />
			<Route exact path="/register" element={<RegisterPage />} />
			<Route exact path="/help" element={<Help />} />
			<Route exact path="/profile" element={<Profile />} />
			<Route exact path="/flowers" element={<Flowers />} />
			<Route exact path="/trees" element={<Trees />} />
		</Routes>
	)
}

export default App;
