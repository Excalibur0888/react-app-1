import React from 'react';
import classes from './Container.module.css';
import InpageImg from '../../../components/InpageImg/InpageImg';
import Title from '../../../components/Title/Title';

function Container() {
	return ( 
		<div className={classes.gallery__container}>
			<InpageImg bg={require('../img/BentleyBG.webp')}/>
			<Title title='Наши' subtitle='Работы' className={classes.gallery__title}/>
		</div>
	 );
}

export default Container;