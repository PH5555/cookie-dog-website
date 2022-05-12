import './Home.css';
import CookieCard from './CookieCard';

function Home(props){
    const { open } = props;
    return (
        <div className="Home">
          <div className='Top-Area'>
            <video src='/video/mainVideo.mp4' muted autoPlay loop/>
            <div className='Main-Box'>
              <p className='Main-Title'>GET YOUR OWN MUSIC in COOKIES</p>
              <div className='Box-With-Shadow'>
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
          </div>
    
          <div className='View-Cookies-Home-Area'>
            <div className='Cookies'>
              <div className='Cookies-Area-Title'>ALL COOKIES</div>
              <div className='Cookies-List'>
                <CookieCard open={open}/>
                <CookieCard open={open}/>
                <CookieCard open={open}/>
                <CookieCard open={open}/>
            </div>
            <div className='Show-More-Button'>
                <div className='Show-More-Cookies'>Show More</div>
              </div>
          </div>
          <div className='Project-Description'>
            <div>
              <div className='Main-Description-1'>
                <div className='Main-Description-Title'>
                  <p>WHAT IS</p>
                  <p>COOKIEDOG?</p>
                </div>
                <div className='Main-Description-Contents'>
                  <p>Cookiedog is a new generation of pop culture community that live on the blockchain. They are fully interactive and evolve over time unlocking new capabilities, games, and experiences – and because they're NFTs, they're truly 100% yours.</p>
                </div>
              </div>
              <img className='Main-Description-Image' src='img/main_image_1.png'/>
              
            </div>
            <div></div>
            <div></div>
          </div>
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
