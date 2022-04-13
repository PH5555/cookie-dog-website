import React, { useState } from 'react';
import Home from './pages/Home';
import Header from './pages/Header';
import AllCookies from './pages/AllCookies';
import CookieDogTeam from './pages/CookieDogTeam'
import Prologue from './pages/Prologue';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <div className='App'> 
      <BrowserRouter>
        <Header/>
        <Routes> 
          <Route path="/" element={<Home />}></Route> 
          <Route path="/allCookies/*" element={<AllCookies />}></Route>
          <Route path="/cookieDogTeam/*" element={<CookieDogTeam />}></Route>
          <Route path="/prologue/*" element={<Prologue />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
