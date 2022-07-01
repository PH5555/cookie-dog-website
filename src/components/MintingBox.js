import React from "react";
import "./MintingBox.css";

const MintingBox = () => {
  return (
    <div className="Main-Box">
      <div>
        <div className="Main-Title-Box">
          <p className="Main-Title">COOKIEDOG</p>
        </div>
        <div className="Mint-Box">
          <img className="NFT-Image" src="img/sample.png"></img>
          <div className="NFT-Box">
            <div>
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
  );
};

export default MintingBox;
