import React from "react";
import './Profile.css';
import Header from "../../components/Header";
import { Helmet } from 'react-helmet';
import Form from "./Form/Form";

const Profile = () => {
	window.addEventListener('beforeunload', (e) => {
		e.preventDefault();
		e.returnValue = '';
	});

	return (
		<section className="Profile">
			<Helmet>
			<title>Profile</title>
		</Helmet>
			<Header/>
			<Form/>
		</section>
	);
};

export default Profile;
