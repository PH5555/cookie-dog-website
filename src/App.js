import React, { useState } from 'react';
import './App.css';

function App() {
  // let [title, updateTitle] = useState('hello world');

  return (
    <div className="App">
      <div className='Top-Area'>
        <div className='App-Bar'>
          <img className="Logo"  src="img/logo.png" />
          <div className='Menu'>
            <p id='Home'>HOME</p>
            <p>Prologue</p>
            <p>ALL COOKIES</p>
            <p>CookieDog Team</p>
            <p>Opensea</p>
          </div>
          <div className='Connect-Wallet-Button'>connect wallet</div>
        </div>
        <div className='Main-Box'>
          <div className='Title-Box'>
            <p className='Main-Title'>GET YOUR OWN MUSIC in COOKIES</p>
            <img className="Main-Image"  src="img/planet.png" />
          </div>
          <div className='Mint-Box'>
            <img className='NFT-Image' src='img/sample.png'></img>
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

      <div className='View-Cookies-Area'>
        <div className='Cookies'>
          <div className='Cookies-Title'>ALL COOKIES</div>
          <div className='Cookies-List'>
            <div className='Cookie-Card'>
              <img className='Cookie-Image' src="img/sample.png"></img>
              <div className='Cookie-Description-And-Play-Button'>
                <div className='Cookie-Description'>
                  <p className='Cookie-Number'>#032</p>
                  <p className='Cookie-Artist'>/Dr. Ahn</p>
                </div>
                <img className='Play-Button' src='img/button.png'></img>
              </div>
              <p className='Cookie-Situation'>0/20</p>
              <div className='Connect-Link'>view on opensea</div>
            </div>

            <div className='Cookie-Card'>
              <img className='Cookie-Image' src="img/sample.png"></img>
              <div className='Cookie-Description-And-Play-Button'>
                <div className='Cookie-Description'>
                  <p className='Cookie-Number'>#032</p>
                  <p className='Cookie-Artist'>/Dr. Ahn</p>
                </div>
                <img className='Play-Button' src='img/button.png'></img>
              </div>
              <p className='Cookie-Situation'>0/20</p>
              <div className='Connect-Link'>view on opensea</div>
            </div>

            <div className='Cookie-Card'>
              <img className='Cookie-Image' src="img/sample.png"></img>
              <div className='Cookie-Description-And-Play-Button'>
                <div className='Cookie-Description'>
                  <p className='Cookie-Number'>#032</p>
                  <p className='Cookie-Artist'>/Dr. Ahn</p>
                </div>
                <img className='Play-Button' src='img/button.png'></img>
              </div>
              <p className='Cookie-Situation'>0/20</p>
              <div className='Connect-Link'>view on opensea</div>
            </div>

            <div className='Cookie-Card'>
              <img className='Cookie-Image' src="img/sample.png"></img>
              <div className='Cookie-Description-And-Play-Button'>
                <div className='Cookie-Description'>
                  <p className='Cookie-Number'>#032</p>
                  <p className='Cookie-Artist'>/Dr. Ahn</p>
                </div>
                <img className='Play-Button' src='img/button.png'></img>
              </div>
              <p className='Cookie-Situation'>0/20</p>
              <div className='Connect-Link'>view on opensea</div>
            </div>

            <div className='Cookie-Card'>
              <img className='Cookie-Image' src="img/sample.png"></img>
              <div className='Cookie-Description-And-Play-Button'>
                <div className='Cookie-Description'>
                  <p className='Cookie-Number'>#032</p>
                  <p className='Cookie-Artist'>/Dr. Ahn</p>
                </div>
                <img className='Play-Button' src='img/button.png'></img>
              </div>
              <p className='Cookie-Situation'>0/20</p>
              <div className='Connect-Link'>view on opensea</div>
            </div>

            
        </div>
        <div className='Show-More-Button'>
            <div className='Show-More-Cookies'>Show More</div>
          </div>
      </div>

      <div className='Project-Description'>

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

export default App;
