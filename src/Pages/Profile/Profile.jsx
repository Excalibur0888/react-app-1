import React from "react";
import './Profile.css';
import Header from "./components/Header/Header";
import { Helmet } from 'react-helmet';
import Form from "./components/Form/Form";

const Profile = () => {
	window.addEventListener('beforeunload', (e) => {
		e.preventDefault();
		e.returnValue = '';
	});

	return (
		<div className="Profile">
			<Helmet>
			<title>Profile</title>
		</Helmet>
			<Header/>
			<Form/>
		</div>
	);
};

export default Profile;
