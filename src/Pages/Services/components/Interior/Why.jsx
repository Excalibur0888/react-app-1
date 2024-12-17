import React from 'react';
import classes from './Why.module.css';
import AdvantageText from '../AdvantageText';

function Why() {
	const text = [
		'Полный и частичный пошив интерьера, изготовление звездного неба',
		'Микроканты, двоение кожи, собственная пробойная перфорация, лазер',
		'Разработка дизайн-проекта до начала работ для согласования каждого сантиметра',
		'Используем в работе исключительно натуральную кожу и оригинальную алькантару',
		'Осуществляем сохранение штатного подогрева и обдува всех сидений и руля',
		'Предоставляем гарантию на работы на весь срок эксплуатации авто'
	];
	const WhyItem = ({text}) => {
		return (
			<div className={classes.WhyItem}>
				<span>{text}</span>
				<i>
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="37px" height="40px">
						<path fillRule="evenodd" stroke="rgb(0, 0, 0)" strokeWidth="0px" strokeLinecap="butt" strokeLinejoin="miter" fill="rgb(65, 58, 85)" d="M6.8,13.746 L18.8,6.996 L30.8,13.746 L30.8,27.246 L18.8,33.996 L6.8,27.246 L6.8,13.746 Z"></path>
					</svg>
				</i>
			</div>
		)
	}

	return ( 
		<div className={classes.Why}>
			<div className={classes.WhyContainer}>
				<AdvantageText subtitle='Почему' title='Выбирают нас'/>
				<div className={classes.WhyBlock}>
					{text.map((txt, index) => (<WhyItem key={index} text={txt}/>))}
				</div>
			</div>
		</div>
	 );
}

export default Why;