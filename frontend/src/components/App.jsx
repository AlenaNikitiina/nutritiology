import React from "react";
import Header from '../components/Header/Header';
import Promo from './Promo/Promo';
import AboutMe from './AboutMe/AboutMe';
//import Service from './Service/Service';
import Footer from './Footer/Footer';
import Ad from './Ad/Ad';
import Stage from './Stage/Stage';

import Consultation from "./Consultation/Consultation";

//import { Route, Routes } from "react-router-dom";

export default function App() {
  
  return (
    <div className="App page">
      <Header />
      <Promo />
      <AboutMe />
      <Ad />
      <Stage />
      <Consultation />
      <Footer />
    </div>
  );
}
