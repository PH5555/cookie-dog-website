import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Header(){
    return(
        <div className='App-Bar'>
              <Link to="/">
                <img className="Logo"  src="img/logo.png"/>
              </Link>
              <div className='Menu'>
                <Link to="/" className='Cookies-Link'><div><p id='Home' className='Menu-Item'>HOME</p></div></Link>
                <Link to="/prologue" className='Cookies-Link'><div><p className='Menu-Item'>Prologue</p></div></Link>
                <Link to="/allCookies" className='Cookies-Link'><div><p className='Menu-Item'>ALL COOKIES</p></div></Link>
                <Link to='/cookieDogTeam' className='Cookies-Link'><div><p className='Menu-Item'>CookieDog Team</p></div></Link>
                <Link to='/'className='Cookies-Link'><div><p className='Menu-Item'>Opensea</p></div></Link>
              </div>
              <div className='Connect-Wallet-Button'>connect wallet</div>
            </div>
    )
}

export default Header;
