import React from 'react';
import classes from './HomePage.module.css';
import { Helmet } from 'react-helmet';
import favicon from '../../img/favicon.jpg'
import Container from './components/Container/Container';
import img1 from '../../img/flex.png'
import img2 from '../../img/24.png'
import img3 from '../../img/inform.png'


const HomePage = () => {
	return (
		<div className={classes.HomePage}>
			<Helmet>
			<title>Home</title>
			<link rel="icon" type="image/ico" href={favicon} />
		</Helmet>
			<Container/>
			<div className={classes.headings}>
				<div><h2>Flexibility</h2><br/>Allows for easy access to a vast amount of information on a wide range of topics.<br/><img src={img1} alt=''/></div>
				<div><h2>Availability</h2><br/>Allows for quick and easy access to the information you need.<br/><img src={img2} alt=''/></div>
				<div><h2>Informativity</h2><br/>Comprehensive and diverse range of information empowers readers with a wealth of knowledge.<br/><img src={img3} alt=''/></div>
			</div>
		</div>	
	)
}

export default HomePage;