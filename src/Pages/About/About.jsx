import React from "react";
import classes from './About.module.css'
import Header from "../../components/Header";
import Container from "./components/Container";
import Description from "./components/Description";

const About = () => {
	return (
	<div className={classes.about}>
		<Header/>
		<Container/>
		<Description/>
	</div>
	);
}
export default About;
