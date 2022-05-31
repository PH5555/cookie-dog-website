import "./Home.css";
import CookieCard from "./CookieCard";

function Home(props) {
  const { open } = props;
  return (
    <div className="Home">
      <div className="Top-Area">
        <video src="/video/mainVideo.mp4" muted autoPlay loop />
        <div className="Main-Box">
          <div className="Main-Title-Box">
            <p className="Main-Title">GET YOUR OWN COOKIES</p>
          </div>
          <div className="Mint-Box">
            <img className="NFT-Image" src="img/sample.png"></img>
            <div className="NFT-Box">
              <div className="NFT-Content">
                <p className="NFT-Name">COOKIEDOG Season 1 NFT</p>
                <p className="NFT-Number">vol. 1000 (50 cookies)</p>
              </div>
              <div className="Date-And-Button">
                <div className="Date">6 April, 12PM EDT</div>
                <div className="Mint-Button">Mint Now</div>
                <p className="Current-Situation">20/20</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="View-Cookies-Home-Area">
        <img src="img/flow.png" className="Flow-Image" />
        <div className="Cookies">
          <div className="Cookies-Area-Title">ALL COOKIES</div>
          <div className="Cookies-List">
            <CookieCard open={open} />
            <CookieCard open={open} />
            <CookieCard open={open} />
            <CookieCard open={open} />
          </div>
          <div className="Show-More-Button">
            <div className="Show-More-Cookies">Show More</div>
          </div>
        </div>
      </div>

      <div className="Project-Description">
        <div className="Main-Description-1">
          <div>
            <div className="Main-Description-Title">
              <p id="Title-What-Is">WHAT IS</p>
              <p>COOKIEDOG?</p>
            </div>
            <div className="Main-Description-Contents">
              <p>
                Cookiedog is a new generation of pop culture community that live
                on the blockchain. They are fully interactive and evolve over
                time unlocking new capabilities, games, and experiences – and
                because they're NFTs, they're truly 100% yours.
              </p>
            </div>
          </div>
          <img
            className="Main-Description-Image-1"
            src="img/main_image_1.png"
          />
        </div>
        <div className="Main-Description-2">
          <img
            className="Main-Description-Image-2"
            src="img/main_image_2.png"
          />
          <div>
            <div className="Main-Description-Title">
              <p>WE SELL COOKIES</p>
            </div>
            <div className="Main-Description-Contents">
              <p>
                Cookie can be music, video, . all of contents we consume and
                make our lives happy.<br></br>
                <br></br>Every seoson you can buy limited version of cookies nft
                of<br></br>cookiedog. and enjoy make expansion of piece of
                contents.<br></br>I will be exciting and thriiled.<br></br>
                build and expand all pieces of contents
              </p>
            </div>
          </div>
        </div>
        <div className="Main-Description-3">
          <div>
            <div className="Main-Description-Title">
              <p>Take the heart Candy</p>
            </div>
            <div className="Main-Description-Contents">
              <p>
                If you take heart candy, you can access cookiedog universe. You
                can create you can be architect for coasis. just take the heart
                candy and join our membership.
              </p>
              <div className="Description-Yes">
                <p>Do you have matamask wallet?</p>
                <div className="Candyshop-Button">
                  <p>go to candyshop</p>
                </div>
              </div>
              <div className="Description-No">
                <p>
                  If you don’t have wallet yet, please put your email and
                  discord id. We will send you the heartcandy, and give you the
                  membership roll
                </p>
                <form>
                  <input
                    className="Email-Input"
                    type="text"
                    placeholder="Email address"
                  ></input>
                </form>
                <div>
                  <form>
                    <input
                      className="Discord-Input"
                      type="text"
                      placeholder="discord ID"
                    ></input>
                  </form>
                  <div className="Send-Button">
                    <p>send</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="Main-Description-Image-3"
            src="img/main_image_3.png"
          />
        </div>
      </div>

      <div className="Bottom-Bar">
        <div className="Info">
          <img className="White-Logo" src="img/logo-white.png"></img>
          <div className="Contact">
            <div className="SNS-List">
              <img className="SNS" src="img/discord_icon.svg"></img>
              <p>Discord</p>
            </div>
            <div className="SNS-List">
              <img className="SNS" src="img/twitter_icon.svg"></img>
              <p>Twitter</p>
            </div>
            <div className="SNS-List">
              <img className="SNS" src="img/insta_icon.svg"></img>
              <p>Instagram</p>
            </div>
            <div className="SNS-List">
              <img className="SNS" src="img/opensea_icon.svg"></img>
              <p>Opensea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
