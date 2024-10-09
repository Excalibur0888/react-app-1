import React from "react";
import './Reviews.css';
import Header from "../../components/Header";
import Container from "./Container/Container";

const Reviews = () => {
	return (
		<div className="reviews">
			<div className="inpage__img">
        <img src={require("./img/dodgeBG.webp")} alt="background"/>
      </div>
		<Header/>
		<Container/>
	</div>
	);
}
export default Reviews;
