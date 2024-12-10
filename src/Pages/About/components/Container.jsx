import React from 'react';
import classes from './Container.module.css';
import PlaySvg from '../img/play.svg'
import PromoMain from './PromoMain';

function Container() {
	return ( 
		<div className={classes.about__container}>
      <video autoPlay loop muted>
        <source src={'https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/W16-Mistral/mistral-iv-1-desktop.mp4'} type="video/mp4" />
      </video>
			<h1 className={classes.about__heading}>О компании <br/><span><span>4</span>Motion</span></h1>
			<button className={classes.about__contact}>написать нам</button>
			<div className={classes.promo__video}>
				<img className={classes.video__preview} src={require('../img/zm-promo_youtube.webp')} alt=""/>
				<img className={classes.play__btn} src={PlaySvg} alt=""/>
			</div>
			<PromoMain/>
    </div>
	 );
}

export default Container;