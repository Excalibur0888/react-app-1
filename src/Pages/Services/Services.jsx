import React from 'react';
import './Services.css';
import Header from '../../components/Header';
import StarSky from './components/StarSky/StarSky';
import Maintenance from './components/Maintenance/Maintenance';
import Contacts from '../../components/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';

function Services() {
	return ( 
		<section className='services'>
			<Header/>
			<StarSky/>
			<Maintenance/>
			<Contacts/>
			<Footer/>
		</section>
	 );
}

export default Services;