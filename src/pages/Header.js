import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='App-Bar'>
              <img className="Logo"  src="img/logo.png" />
              <div className='Menu'>
                <p id='Home' className='Menu-Item'>HOME</p>
                <p className='Menu-Item'>Prologue</p>
                <Link to="/allCookies" className='Cookies-Link'><p className='Menu-Item'>ALL COOKIES</p></Link>
                <p className='Menu-Item'>CookieDog Team</p>
                <p className='Menu-Item'>Opensea</p>
              </div>
              <div className='Connect-Wallet-Button'>connect wallet</div>
            </div>
    )
}

export default Header;
