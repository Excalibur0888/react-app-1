import React from 'react';
import classes from './StarSky.module.css';
import PromoMain from '../../../About/components/PromoMain';
import StarSkyContainers from './StarSkyContainers';
import AdvantageText from '../AdvantageText';

function StarSky({bg, text}) {

	return ( 
		<div className={classes.StarSky}>
			<div className={classes.StarSky__container}>
				<h2 className={classes.StarSky__subtitle}>Наша визитная карточка</h2>
				<h1 className={classes.StarSky__title}>Звёздное небо</h1>
				<div className={classes.StarSky__description}>
					Звездное небо в потолке вашего автомобиля — это тысячи маленьких оптоволоконных нитей,
					<br/>
					надежно закрепленных специальным образом, которые создают невероятный эффект!
				</div>
				<PromoMain/>
			</div>
			<AdvantageText subtitle='Особенности' title='Нашего звездного неба'/>
			<StarSkyContainers/>
		</div>
	);
}

export default StarSky;