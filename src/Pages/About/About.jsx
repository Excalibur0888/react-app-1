import React from "react";
import classes from './About.module.css'
import Header from "../../components/Header";
import Container from "./components/Container";
import Description from "./components/Description";
import YMAP from './components/YMap';
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button'
import SocialLinks from "./components/SocialLinks";

const About = () => {
	return (
	<section className={classes.about}>
		<Header/>
		<Container/>
		<Description/>
		<YMAP/>
		<Button title="Проложить к нам путь в Яндекс.Навигаторе" className={classes.about__btn2}/>
		<SocialLinks/>
		<Contacts/>
		<Footer/>
	</section>
	);
}
export default About;
