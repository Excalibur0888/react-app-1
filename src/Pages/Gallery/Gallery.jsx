import React from "react";
import './Gallery.css';
import Header from "../../components/Header";
import Container from "./components/Container/Container";
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'

const Gallery = () => {
	return (
	<section className="gallery">
		<Header/>
		<Container/>
		<Contacts/>
		<Footer/>
	</section>
	);
}
export default Gallery;
