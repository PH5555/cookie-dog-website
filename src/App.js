import React, { useState } from 'react';
import './App.css';

function App() {
  // let [title, updateTitle] = useState('hello world');

  return (
    <div className="App">
      <div className='App-Bar'>
        
        <img className="Logo"  src="img/logo.png" />
      
        <div className='Menu'>
          <p id='Home'>HOME</p>
          <p>Prologue</p>
          <p>ALL COOKIES</p>
          <p>CookieDog Team</p>
          <p>Opensea</p>
          <div className='Connect-Wallet-Button'>
            connect wallet
          </div>
        </div>
      </div>
      <div className='Main-Box'>
        <div className='Title-Box'>
          <p className='Title'>GET YOUR OWN MUSIC in COOKIES</p>
          <img className="Main-Image"  src="img/planet.png" />
        </div>
       
        <div className='Mint-Box'>
        ff
        </div>
      </div>
    </div>
  );
}

export default App;
