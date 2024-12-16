import React from 'react';
import classes from './WorkProcess.module.css';
import Button from '../../../../components/Button'
import { Link } from 'react-router-dom';
import WorkProcessSwiper from './WorkProcessSwiper';

function WorkProcess({description, subtitle, title, swtitle, images, classSwiper, classText}) {
	return ( 
		<div className={classes.WorkProcess}>
			<div className={classes.WorkProcess__container}>
				<div className={`${classes.WorkProcess__description} ${classText}`}>
					<div className={classes.WorkProcess__header}>
						<b>{title}</b><br/>
						{subtitle}
					</div>
					<div className={classes.WorkProcess__text} dangerouslySetInnerHTML={{ __html: description }}>
					</div>
					<Link to='/help' style={{textDecoration: `none`}}>
						<Button title='Узнайте больше' className={classes.WorkProcess__btn}/>
					</Link>
				</div>
			</div>
			<WorkProcessSwiper classSwiper={classSwiper} images={images} swtitle={swtitle}/>
		</div>
	 );
}

export default WorkProcess;