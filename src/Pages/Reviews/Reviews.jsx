import React from "react";
import './Reviews.css';
import Header from "../../components/Header";
import Container from "./Container/Container";
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'

const Reviews = () => {
	return (
		<div className="reviews">
		<Header/>
		<Container/>
		<Contacts/>
		<Footer/>
	</div>
	);
}
export default Reviews;
