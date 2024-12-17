import React from 'react';
import classes from './Interior.module.css'
import WorkProcess from '../Maintenance/WorkProcess';
import Why from './Why';

function Interior() {
	return ( 
		<div className={classes.Interior}>
			<WorkProcess
					description={`<p>
						Мы занимаемся индивидуализацией интерьеров, начиная от разработки дизайн-проекта, на котором согласовываются все виды и 
						комбинации цветов материалов, заказом материалов из Европы и США и воплощением проекта в реальность
						</p><br/>
						Мы располагаем собственным штатом мастеров, собственное оборудование по пробойной перфорации на коже и алькантаре, 
						оборудованием для лазерной гравировки, аппаратом для спуска кожи шириной полотна 49см, что позволяет быстро и качественно 
						обработать материал для любых элементов салона и собственной разработкой по реализации "Звёздного неба" в интерьере 
						(делаем не менее 2000 звёзд).`} 
				title='Пошив салона'
				subtitle='Для вашего автомобиля' 
				classSwiper={classes.InteriorProcess}
				classText={classes.InteriorText}
				swtitle='Примеры работ'
				images={['s1.webp', 's2.webp', 's3.webp', 's4.webp', 's5.webp', 's6.webp', 's7.webp']}
			/>
			<Why/>
		</div>
	 );
}

export default Interior;