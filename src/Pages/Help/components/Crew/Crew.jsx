import React from 'react';
import classes from './Crew.module.css';
import Title from '../../../../components/Title/Title';
import Social from '../../../../components/Footer/Social';
import crewData from './crewData';

function Crew() {
	
	const CrewList = () => {
		return (
			<>
				{crewData.map((crewMember, index) => (
					<div key={index} className={classes.crew__item}>
						<div className={classes.crew__red__line}></div>
						<div className={classes.crew__item__container}>
							<div className={classes.crew__item__block}>
								<img src={crewMember.image} alt={`Сотрудник ${index + 1}`} />
							</div>
							<div className={classes.crew__item__socials}>
								<Social whatsapp={true} telegram={true} />
							</div>
							<div className={classes.crew__text}>
								<h2>{crewMember.name}</h2>
								<a href={`tel:${crewMember.phone}`}>{crewMember.phone}</a>
								<span>{crewMember.date}</span>
								<ul>
									{crewMember.works.map((work, i) => (
										<li key={i}>{work}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</>
		);
	};
	
	return ( 
		<div className={classes.crew__container}>
			<div className={classes.grid__container}>
				<Title title="Наша" subtitle="Команда" className={classes.crew__title}/>
				<div className={classes.crew__ellipse}></div>
				<CrewList/>
			</div>
		</div>
	 );
}

export default Crew;