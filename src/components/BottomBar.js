import React from "react";
import "./BottomBar.css";

const BottomBar = () => {
  return (
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
  );
};

export default BottomBar;
