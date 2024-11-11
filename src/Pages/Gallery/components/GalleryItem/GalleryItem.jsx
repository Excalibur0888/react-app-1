import React from 'react';
import classes from './GalleryItem.module.css'

function GalleryItem({imgSrc, text}) {
	return ( 
		<div className={classes.gallery__item}>
			<img src={imgSrc} alt='Работа'/>
			<div className={classes.gallery__cover}>
				<h2>{text}</h2>
				<div className={classes.gallery__more}><span>Подробнее</span></div>
			</div>
		</div>
	 );
}

export default GalleryItem;