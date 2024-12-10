import React from 'react';
import Promo from './Promo';
import classes from './Container.module.css';

function PromoMain() {
	return ( 
		<>
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
		</>
	 );
}

export default PromoMain;