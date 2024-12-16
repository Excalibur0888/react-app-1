import React from 'react';
import classes from './DetGallery.module.css';
import AdvantageText from '../AdvantageText';

function DetGallery() {
	const images = [
		'd2.webp', 'd3.webp', 'd4.webp', 'd5.webp'
	]

	const text = [
		'Dodge Challenger R/T ScatPack', 'Ford Mustang GT', 'Jaguar F-type', 'Porsche 911'
	]

	const RItem = ({img, text}) => {
		return (
			<div className={classes.DetGallery__ritem}>
				<img className={classes.DetGallery__item__img} src={require(`../../img/${img}`)} alt='Работа'/>
				<div className={classes.DetGallery__item__title}>{text}</div>
				<div className={classes.DetGallery__item__plus}>
					<span></span>
					<span></span>
				</div>
			</div>
		)
	}

	return ( 
		<div className={classes.DetGallery}>
			<AdvantageText subtitle='Галерея' title='Наших работ'/>
			<div className={classes.DetGallery__blocks}>
				<div className={classes.DetGallery__litem}>
					<img className={classes.DetGallery__item__img} src={require(`../../img/d1.webp`)} alt='Bentley Continental'/>
					<div className={classes.DetGallery__item__title}>Bentley Continental Cabrio</div>
					<div className={classes.DetGallery__item__plus}>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={classes.DetGallery__ritems}>
				{images.map((img, index) => (
					<RItem
						key={index}
						img={img}
						text={text[index]}
						/>
				))}
				</div>
			</div>
		</div>
	 );
}

export default DetGallery;