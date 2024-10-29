import React from "react";
import classes from "./Help.module.css";
import Header from "../../components/Header";
import Container from "./components/Container/Container";
import Crew from "./components/Crew/Crew";
import Footer from "../../components/Footer/Footer";

const Help = () => {
	return (
  <div className={classes.help}>
		<Header />
		<Container/>
		<Crew/>
		<Footer/>
  </div>
	)
};
export default Help;
