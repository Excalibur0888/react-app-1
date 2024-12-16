import React from 'react';
import classes from './Maintenance.module.css';
import CarShowcase from './CarShowcase';
import WorkProcess from './WorkProcess';

function Maintenance() {
	return ( 
		<div className={classes.Maintenance}>
			<WorkProcess
				description={`<p>
						В нашем тюнинг-ателье мы предлагаем профессиональное техническое обслуживание Вашего автомобиля, включающее в себя 
						диагностику ходовой, диагностику тормозной системы и выявление течей двигателя. Мы работаем со следующими автопроизводителями:
						Audi, Porsche, Bentley, BMW, MINI, Mercedes-Benz, VW, Toyota, Lexus, Ford, Dodge, Chevrolet, Jeep, RAM.
						Приятным бонусом является то, что если вы производите какие-либо работы у нас в компании, вышеописанную диагностику мы 
						производим бесплатно!
						</p><br/>
						Также, доступна профессиональная компьютерная диагностика BMW, Mercedes, Chrysler (Dodge, Jeep, RAM)`} 
				title='Техническое обслуживание'
				subtitle='Для вашего автомобиля'
				swtitle='Рабочий процесс'
				images={['proc1.webp', 'proc2.webp', 'proc3.webp', 'proc4.webp']}
			/>
			<CarShowcase/>
		</div>
	 );
}

export default Maintenance;