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
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Service />
      <Footer />
    </div>
  );
}

/*

<Route path="/sign-in" element={<Login handleLogin={handelLogin} />}></Route>

  return (
    <div className="App page">
      <Routes>
        <Route path="/" element={<He handleLogin={handelLogin} component={Header} />}></Route>
        <Route path="/sign-in" element={<Login handleLogin={handelLogin} />}></Route>
      </Routes>
      <Header />
      <Main />
      <Footer />
    </div>
  );
  */
