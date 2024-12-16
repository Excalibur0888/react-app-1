import React from 'react';
import './Services.css';
import Header from '../../components/Header';
import StarSky from './components/StarSky/StarSky';
import Maintenance from './components/Maintenance/Maintenance';
import Contacts from '../../components/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
import Detailing from './components/Detailing/Detailing';
import Interior from './components/Interior/Interior';

function Services() {
	return ( 
		<section className='services'>
			<Header/>
			<StarSky/>
			<Maintenance/>
			<Detailing/>
			<Interior/>
			<Contacts/>
			<Footer/>
		</section>
	 );
}

export default Services;