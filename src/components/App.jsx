import Header from '../components/Header/Header';
import Promo from './Promo/Promo';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import Service from './Service/Service';

//import { Route, Routes } from "react-router-dom";
import React from "react";


export default function App() {
  
  return (
    <div className="App page">
      <Header />
      <Promo />
      <AboutMe />
      <Service />
      <Footer />
    </div>
  );
}

/*
      <Route path="/" element={
          <ProtectedRoute
            component={Main}
          /> }>
        <Route path="/about" element={<About />}></Route>*/