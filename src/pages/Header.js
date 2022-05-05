import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

function Header(){
    // const location = useLocation();
    // console.log(location.pathname);

    // const styledText = styled.p`font-size: 1.4rem; font-weight: 500;font-family: "Heebo";margin-bottom: 0px;margin-top: 0px; color:${(location)=>(location.pathname == '/allCookies' ? "black" : "white") }`;
    // function ItemText({ children }){
    //   return <styledText>{children}</styledText>;
    // }
    return(
        <div className='App-Bar'>
              <Link to="/">
                <img className="Logo"  src="img/logo.png"/>
              </Link>
              <div className='Menu'>
                <Link to="/" className='Cookies-Link'><div><p id='Home' className='Menu-Item'>HOME</p></div></Link>
                <Link to="/prologue" className='Cookies-Link'><div><p className='Menu-Item' >Prologue</p></div></Link>
                <Link to="/allCookies" className='Cookies-Link'><div><p className='Menu-Item'>ALL COOKIES</p></div></Link>
                <Link to='/cookieDogTeam' className='Cookies-Link'><div><p className='Menu-Item'>CookieDog Team</p></div></Link>
                <a href='https://opensea.io/' className='Cookies-Link' ><div><p className='Menu-Item'>Opensea</p></div></a>
              </div>
              <div className='Connect-Wallet-Button'>connect wallet</div>
            </div>
    )
}

export default Header;
