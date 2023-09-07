import React from 'react';
import Header from '../components/Header/Header';
import Promo from './Promo/Promo';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import Ad from './Ad/Ad';
import Stage from './Stage/Stage';
import Warning from './Warning/Warning';
import Consultation from './Consultation/Consultation';

//import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className='App page'>
      <Header />
      <Promo />
      <AboutMe />
      <Warning />
      <Stage />
      <Ad />
      <Consultation />
      <Footer />
    </div>
  )
}
