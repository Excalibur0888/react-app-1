import React from 'react';
import classes from './CarShowcaseBtns.module.css';

function CarShowcaseBtns({ onHover, onClick }) {
	const buttonLabels = [
			'Замена масла <br/>и фильтров',
			'Ремонт и замена навесного <br/>оборудования',
			'Обслуживание тормозных <br/>систем и их тюнинг',
			'Тюнинг и обслуживание <br/>подвески',
			'Замена свечей зажигания и <br/>накаливания',
			'Изготовление и ремонт <br/>выхлопных систем',
			'Диагностика автомобиля',
			'Подбор запчастей',
			'Тюнинг, подбор и установка <br/>компонентов на автомобиль',
			'Ремонт двигателя и КПП'
	];

	return (
			<div className={classes.CarShowcaseBtns}>
					{buttonLabels.map((label, index) => (
							<div
									key={index}
									className={classes.CarShowcaseBtn__container}
							>
									<div
											className={classes.CarShowcaseBtn__btn}
											dangerouslySetInnerHTML={{ __html: label }}
											onMouseEnter={() => onHover(index + 1)}
											onMouseLeave={() => onHover(0)}
											onClick={() => onClick(index)}
									/>
							</div>
					))}
			</div>
	);
}


export default CarShowcaseBtns;
