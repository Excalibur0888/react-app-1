import React from 'react';
import classes from './WhyBlock.module.css';
import AdvantageText from '../AdvantageText';

function WhyBlock() {
	return ( 
		<div className={classes.WhyBlock}>
			<AdvantageText subtitle='Почему' title='Выбирают нас'/>
		</div>
	 );
}

export default WhyBlock;