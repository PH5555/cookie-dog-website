import React, { useState } from 'react';
import './App.css';

function App() {
  // let [title, updateTitle] = useState('hello world');

  return (
    <div className="App">
      <div className='App-Bar'>
        <div className='Logo'>
          
        </div>
      
        <div className='Menu'>
          <p className='Menu-List' id='Home'>HOME</p>
          <p className='Menu-List'>Prologue</p>
          <p className='Menu-List'>ALL COOKIES</p>
          <p className='Menu-List'>CookieDog Team</p>
          <p className='Menu-List'>Opensea</p>
          <div className='Connect-Wallet-Button'>
            connect wallet
          </div>
        </div>
      </div>
      <div className='Main-Box'>
        <p className='Title'>GET YOUR OWN MUSIC in COOKIES</p>
        <div className='Mint-Box'>
        ff
        </div>
      </div>
    </div>
  );
}

export default App;
