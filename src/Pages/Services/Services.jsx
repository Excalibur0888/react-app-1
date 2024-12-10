import React from 'react';
import './Services.css';
import Header from '../../components/Header';
import StarSky from './components/StarSky/StarSky';
import Maintenance from './components/Maintenance/Maintenance';

function Services() {
	return ( 
		<section className='services'>
			<Header/>
			<StarSky/>
			<Maintenance/>
		</section>
	 );
}

export default Services;