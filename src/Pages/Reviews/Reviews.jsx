import React from "react";
import './Reviews.css';
import Header from "../../components/Header";
import Container from "./Container/Container";
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'

const Reviews = () => {
	return (
		<div className="reviews">
			<div className="inpage__img">
        <img src={require("./img/dodgeBG.webp")} alt="background"/>
      </div>
		<Header/>
		<Container/>
		<Contacts/>
		<Footer/>
	</div>
	);
}
export default Reviews;
