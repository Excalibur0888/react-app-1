import React from 'react';
import classes from './WorkProcess.module.css';
import Button from '../../../../components/Button'
import { Link } from 'react-router-dom';
import WorkProcessSwiper from './WorkProcessSwiper';

function WorkProcess() {
	return ( 
		<div className={classes.WorkProcess}>
			<div className={classes.WorkProcess__container}>
				<div className={classes.WorkProcess__description}>
					<div className={classes.WorkProcess__header}>
						<b>Техническое обслуживание</b><br/>
						Для вашего автомобиля
					</div>
					<div className={classes.WorkProcess__text}>
						<p>
						В нашем тюнинг-ателье мы предлагаем профессиональное техническое обслуживание Вашего автомобиля, включающее в себя 
						диагностику ходовой, диагностику тормозной системы и выявление течей двигателя. Мы работаем со следующими автопроизводителями:
						Audi, Porsche, Bentley, BMW, MINI, Mercedes-Benz, VW, Toyota, Lexus, Ford, Dodge, Chevrolet, Jeep, RAM.
						Приятным бонусом является то, что если вы производите какие-либо работы у нас в компании, вышеописанную диагностику мы 
						производим бесплатно!
						</p><br/>
						Также, доступна профессиональная компьютерная диагностика BMW, Mercedes, Chrysler (Dodge, Jeep, RAM)
					</div>
					<Link to='/help' style={{textDecoration: `none`}}>
						<Button title='Узнайте больше' className={classes.WorkProcess__btn}/>
					</Link>
				</div>
			</div>
			<WorkProcessSwiper/>
		</div>
	 );
}

export default WorkProcess;