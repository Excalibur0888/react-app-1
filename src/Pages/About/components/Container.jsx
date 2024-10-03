import React from 'react';
import classes from './Container.module.css';
import PlaySvg from '../img/play.svg'
import Promo from './Promo';

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
			<Promo/>
			<ul className={classes.social}>
				<li>
					<span>Мы в социальных сетях</span>
				</li>
				<li>
					<a href="https://drive2.ru" target='_blank' rel="noreferrer"><img src={require('../../../img/drive2.webp')} alt=""/></a>
				</li>
				<li>
					<a href="https://youtube.com" target='_blank' rel="noreferrer"><img src={require('../../../img/yt.webp')} alt=""/></a>
				</li>
				<li>
					<a href="https://vk.com" target='_blank' rel="noreferrer"><img src={require('../../../img/vk.webp')} alt=""/></a>
				</li>
				<li>
					<a href="https://t.me" target='_blank' rel="noreferrer"><img src={require('../../../img/tg.png')} alt=""/></a>
				</li>        				
			</ul>
    </div>
	 );
}

export default Container;