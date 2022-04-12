import './AllCookies.css'
import CookieCard from './CookieCard';

function AllCookies(){
    return(
        <div className='View-Cookies-Area'>
            <div className='Cookies'>
              <div className='Cookies-Title'>ALL COOKIES</div>
              <div className='Cookies-List'>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
              </div>
          </div>
        </div>
    )
}

export default AllCookies;
