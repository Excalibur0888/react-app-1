import React from "react";
import classes from "./Help.module.css";
import Header from "../../components/Header";
import Container from "./components/Container/Container";

const Help = () => {
	return (
  <div className={classes.help}>
		<Header />
		<Container/>
  </div>
	)
};
export default Help;
