import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='App-Bar'>
              <img className="Logo"  src="img/logo.png" />
              <div className='Menu'>
                <Link to="/" className='Cookies-Link'><p id='Home' className='Menu-Item'>HOME</p></Link>
                <Link to="/prologue" className='Cookies-Link'><p className='Menu-Item'>Prologue</p></Link>
                <Link to="/allCookies" className='Cookies-Link'><p className='Menu-Item'>ALL COOKIES</p></Link>
                <Link to='/cookieDogTeam' className='Cookies-Link'><p className='Menu-Item'>CookieDog Team</p></Link>
                <p className='Menu-Item'>Opensea</p>
              </div>
              <div className='Connect-Wallet-Button'>connect wallet</div>
            </div>
    )
}

export default Header;
