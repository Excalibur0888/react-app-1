import React from "react";
import './Reviews.css';
import Header from "../../components/Header";
import Container from "./Container/Container";
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'

const Reviews = () => {
	return (
	<section className="reviews">
		<Header/>
		<Container/>
		<Contacts/>
		<Footer/>
	</section>
	);
}
export default Reviews;
