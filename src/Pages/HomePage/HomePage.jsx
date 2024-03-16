import React from 'react';
import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Container from './components/Container/Container';
import TypingText from './components/TypingText/TypingText'
import img1 from '../../img/flex.png';
import img2 from '../../img/24.png';
import img3 from '../../img/inform.png';
import img4 from '../../img/Screenshot_1.png'
import img5 from '../../img/Screenshot_2.png'

const HomePage = () => {
	return (
		<div className={classes.HomePage}>
			<Container />
			<div className={classes.headings}>
				<div>
					<h2>Flexibility</h2>
					<br />
					Allows for easy access to a vast amount of information on a wide range of topics.
					<br />
					<img src={img1} alt="" />
				</div>
				<div>
					<h2>Availability</h2>
					<br />
					Allows for quick and easy access to the information you need.
					<br />
					<img src={img2} alt="" />
				</div>
				<div>
					<h2>Informativity</h2>
					<br />
					Comprehensive and diverse range of information empowers readers with a wealth of knowledge.
					<br />
					<img src={img3} alt="" />
				</div>
			</div>
			<div className={classes.tutorial}>
				<div className={classes.hr}></div>
				<br />
				<div className={classes.interactive}>
					<h2>Check our new sections!</h2>
					<div className={classes.h3}>
						<h3>
							Fruits guide <box-icon name="lemon" color="rgba(255, 255, 255)"></box-icon>
						</h3>
						<h3>
							Vegetables guide <box-icon name="leaf" color="rgba(255, 255, 255)"></box-icon>
						</h3>
					</div>
					<div className={classes.containers}>
						<Link to="/fruits"><div className={classes.container} style={{backgroundImage: `url(${img4})`}}></div></Link>
						<Link to="/vegetables"><div className={classes.container} style={{backgroundImage: `url(${img5})`}}></div></Link>
					</div>
					<TypingText phr1="All this guides are linked to Wikipedia." phr2="Moreover it's comfortable to learn and free."/>
				</div>
			</div>
			<footer className={classes.footer}>Copyright 2024. ©Silentlib. All rights reserved</footer>
		</div>
	);
};

export default HomePage;
