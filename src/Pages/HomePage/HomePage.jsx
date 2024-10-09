import React from 'react';
import './HomePage.css';
import Container from './components/Container/Container';
import Headings from './components/Headings/Headings';
import { Helmet } from "react-helmet";
import logo from '../../img/logo.png';
import Suggestions from './components/Suggestions/Suggestions';
import Works from './components/Works/Works';
import Contacts from '../../components/Contacts/Contacts'
import HomeReviews from './components/HomeReviews/HomeReviews';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div className="HomePage">
      <Helmet>
        <title>4MOTION</title>
				<link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <Container />
      <Headings />
			<Suggestions/>
			<Works/>
			<HomeReviews/>
			<Contacts/>
			<Footer/>
    </div>
  );
};

export default HomePage;
