import React from 'react';
import classes from './Modal.module.css'
import Button from '../../../../components/Button'
import { Link } from 'react-router-dom';

function Modal({ data, onClose }) {
	return (
		<div className={classes.Modal}>
				<header className={classes.Modal__header}>
						<h2 className={classes.Modal__title}>{data.title}</h2>
						<h2 className={classes.Modal__price}>{data.price}</h2>
						<div className={classes.CloseButton} onClick={onClose}>
						&times;
						</div>
				</header>
				<main className={classes.Modal__body}>
						<div className={classes.Modal__img}>
								<img src={require(`../../img/${data.image}`)} alt={data.title} />
						</div>
						<div className={classes.Modal__content}>{data.description}</div>
				</main>
				<Link to='/help' style={{textDecoration: `none`}}><Button title='Заказать' className={classes.Modal__btn}/></Link>
		</div>
);
}

export default Modal;
