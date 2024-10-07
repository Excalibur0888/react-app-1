import React from 'react';
import classes from './Title.module.css'

function Title({title, subtitle, className}) {
	return ( 
		<div className={`${classes.title} ${className}`}>
        <span>{title}</span>
        <b>{subtitle}</b>
      </div>
	 );
}

export default Title;