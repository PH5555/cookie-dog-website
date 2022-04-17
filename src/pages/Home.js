import './Home.css';
import CookieCard from './CookieCard';

function Home(){
    return (
        <div className="Home">
          <div className='Top-Area'>
            <video src='/video/mainVideo.mp4' muted autoPlay loop/>
            <div className='Main-Box'>
              <div className='Title-Box'>
                <p className='Main-Title'>GET YOUR OWN MUSIC in COOKIES</p>
                <img className="Main-Image"  src="img/planet.png" />
              </div>
              <div className='Mint-Box'>
                <img className='NFT-Image' src='img/sample.png'></img>
                <div className='NFT-Box'>
                  <div className='NFT-Content'>
                    <p className='NTF-Name'>MuteHoon</p>
                    <p className='NFT-Number'>#078</p>
                  </div>
                  <div className='Date-And-Button'>
                    <div className='Date'>6 April, 12PM EDT</div>
                    <div className='Mint-Button'>Mint Now</div>
                    <p className='Current-Situation'>20/20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className='View-Cookies-Area'>
            <div className='Cookies'>
              <div className='Cookies-Title'>ALL COOKIES</div>
              <div className='Cookies-List'>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
                <CookieCard/>
            </div>
            <div className='Show-More-Button'>
                <div className='Show-More-Cookies'>Show More</div>
              </div>
          </div>
          <div className='Project-Description'></div>
          <div className='Bottom-Bar'>
            <div className='Info'>
              <img className='White-Logo' src='img/logo-white.png'></img>
              <div className='Contact'>
                <div className='SNS-List'>
                  <img className='SNS' src='img/discord_icon.svg'></img>
                  <p>Discord</p>
                </div>
                <div className='SNS-List'>
                  <img className='SNS' src='img/twitter_icon.svg'></img>
                  <p>Twitter</p>
                </div>
                <div className='SNS-List'>
                  <img className='SNS' src='img/insta_icon.svg'></img>
                  <p>Instagram</p>
                </div>
                <div className='SNS-List'>
                  <img className='SNS' src='img/opensea_icon.svg'></img>
                  <p>Opensea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Home;
