import React, { useState } from 'react';
import Home from './pages/Home';
import Header from './pages/Header';
import AllCookies from './pages/AllCookies';
import CookieDogTeam from './pages/CookieDogTeam'
import Prologue from './pages/Prologue';
import CookieDetail from './pages/CookieDetail';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MusicBottomBar from './pages/MusicBottomBar';

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return(
    <div className='App'> 
      <Router>
        <Header/>
        <Routes> 
          <Route path="/" element={<Home open={openModal}/>}></Route> 
          <Route path="/allCookies/*" element={<AllCookies />}></Route>
          <Route path="/cookieDogTeam/*" element={<CookieDogTeam />}></Route>
          <Route path="/prologue/*" element={<Prologue />}></Route>
          <Route path="/cookieDetail/*" element={<CookieDetail />}></Route>
        </Routes>
        <MusicBottomBar start={modalOpen} stop={closeModal}/>
      </Router>
    </div>
  )
}

export default App;
