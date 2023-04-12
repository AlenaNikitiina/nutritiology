import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Route, Routes } from "react-router-dom";
import About from './About';
import React from "react";
import Service from './Service';


export default function App() {
  
  return (
    <div className="App page">
      <Header />
      <Main />

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