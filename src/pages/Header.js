import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

function Header(){
    const location = useLocation();
    const textColor = location.pathname == "/allCookies" ? "black" : "white";
    const HeadText = styled.p`
    font-size: 1.4rem; 
    font-weight: 500;
    font-family: "Heebo";
    margin-bottom: 0px;
    margin-top: 0px; 
    color:${textColor};
    `;
    
    return(
        <div className='App-Bar'>
              <Link to="/">
                <img className="Logo"  src="img/logo.png"/>
              </Link>
              <div className='Menu'>
                <Link to="/" className='Cookies-Link'><div><p id='Home' className='Menu-Item'>HOME</p></div></Link>
                <Link to="/prologue" className='Cookies-Link'><div><HeadText>Prologue</HeadText></div></Link>
                <Link to="/allCookies" className='Cookies-Link'><div><HeadText>ALL COOKIES</HeadText></div></Link>
                <Link to='/cookieDogTeam' className='Cookies-Link'><div><HeadText>CookieDog Team</HeadText></div></Link>
                <a href='https://opensea.io/' className='Cookies-Link' ><div><HeadText>Opensea</HeadText></div></a>
              </div>
              <div className='Connect-Wallet-Button'>connect wallet</div>
            </div>
    )
    
}

export default Header;
