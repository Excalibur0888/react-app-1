import React from "react";
import classes from './About.module.css'
import Header from "../../components/Header";

const About = () => {
	return (
	<div className={classes.about}>
		<Header/>
		<div className={classes.about__container}>
			{/* <div className={classes.overlay}></div> */}
      <video autoPlay loop muted>
        <source src={'https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/W16-Mistral/mistral-iv-1-desktop.mp4'} type="video/mp4" />
      </video>
			<h1 className={classes.about__heading}>О компании <br/>4Motion</h1>
			<button className={classes.about__contact}>написать нам</button>
    </div>
	</div>
	);
}
export default About;
