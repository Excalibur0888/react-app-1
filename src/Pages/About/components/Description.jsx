import React from 'react';
import classes from './Description.module.css'
import BorderRT from '../../../components/LineBorders/BorderRT'
import BorderLB from '../../../components/LineBorders/BorderLB'
import BorderRB from '../../../components/LineBorders/BorderRB'
import Promo from './Promo';
import Button from '../../../components/Button'

function Description() {
	return ( 
		<div className={classes.description}>
			<h2 class={classes.about__title}>
    		<p>О НАШЕЙ <b><span>СТУДИИ</span></b></p>
    	</h2>
			<div className={classes.subtitle}>И команде</div>
			<BorderRT className={classes.borderRT}/>
			<div className={classes.description__container}>
				<p>
				Каждый член нашей команды по-настоящему уникальный специалист, обладающий обширным опытом и, кроме того, 
				художественным вкусом. Потребность автолюбителей в качественном ремонте, тюнинге и наше желание поделиться накопленным 
				опытом привело к созданию студии «4Motion».
				</p>
				<p>
					<b>С 1 октября 2009г. наше тюнинг-ателье с радостью предлагает вам <br/>
					огромное количество вариантов доработки любимого автомобиля:</b>
				</p>
				<ul className={classes.description__list}>
						<li>Кузовной ремонт, окрас кузова;</li>
						<li>Собственная лаборатория по подбору цвета и технолог - колорист; </li>
						<li>Технический центр;</li>
						<li>Изготовление выхлопных систем;</li>
						<li>Установка аэродинамических обвесов;</li>
						<li>Шумоизоляция салона;</li>
						<li>Замена штатной акустической системы и создание аудиосистем соревновательного и шоу уровня;</li>
						<li>Оклейка кузова и салона автомобиля декоративными виниловыми пленками;</li>
						<li>Защита кузова от сколов полиуретаном;</li>
						<li>Пошив салонов любой сложности (разработка дизайн-проекта);</li>
						<li>Установка дополнительного оборудования;</li>
						<li>Покраска и ремонт дисков;</li>
						<li>Тюнинг тормозных систем;</li>
						<li>Декорирование деталей натуральным карбоном;</li>
						<li>Изготовление звёздного неба в салон автомобиля;</li>
						<li>Полный детейлинг автомобилей.</li>
				</ul>
				<BorderLB className={classes.borderLB}/>
				<BorderRB className={classes.borderRB}/>
			</div>
			<h2 class={classes.about__title}>
    		<p>МЫ<b><span>НАХОДИМСЯ</span></b></p>
    	</h2>
			<div className={classes.subtitle}>По адресу:</div>
			
			<div className={classes.description__container}>
				<BorderRT className={classes.borderRT2}/>
				<p>
				Г. МОСКВА, УЛ. ТВЕРСКАЯ-ЯМСКАЯ Д2 СТР3,<br/>
				ТЕМ САМЫМ ОБЕСПЕЧИВАЯ УДОБНЫЙ ПОДЪЕЗД ИЗ ЛЮБОЙ ТОЧКИ ГОРОДА!
				</p>
				<br/>
				<p>
				В нашем распоряжении собственный склад автозапчастей, просторные и чистые помещения, укомплектованные самым современным
				оборудованием и инструментами для проведения работ, на которых мы специализируемся!
				Менеджеры нашей компании с радостью помогут Вам с выбором того или иного решения для Вашего авто, проконсультируют
				по техническим вопросам и вместе мы подберем оптимальные решения именно для Вас и Вашего автомобиля!
				</p>
				<BorderLB className={classes.borderLB}/>
				<BorderRB className={classes.borderRB}/>
				<div className={classes.description__utils}>
					<Promo className={classes.description__promo}/>
					<Button title="Написать нам" className={classes.description__btn1}/>
				</div>
			</div>
		</div>
	 );
}

export default Description;