import "./Home.css";
import React, { useState } from "react";
import CookieCard from "../components/CookieCard";
import MintingBox from "../components/MintingBox";
import BottomBar from "../components/BottomBar";
import ProjectDescription from "../components/ProjectDescriptionTemplate";

const Home = (props) => {
  const { open, setMax } = props;

  return (
    <div className="Home">
      <div className="Minting-Area">
        <img src="img/background.png" className="Background" />
        <MintingBox />
      </div>

      {/* <div className="View-Cookies-Home-Area">
        <img src="img/flow.png" className="Flow-Image" />
        <div className="Cookies">
          <div className="Cookies-Area-Title">ALL COOKIES</div>
          <div className="Cookies-List">
            <CookieCard open={open} setMax={setMax} />
            <CookieCard open={open} setMax={setMax} />
            <CookieCard open={open} setMax={setMax} />
            <CookieCard open={open} setMax={setMax} />
          </div>
          <div className="Show-More-Button">
            <div
              className="Show-More-Cookies"
              onClick={() => navigate("/allCookies")}
            >
              Show More
            </div>
          </div>
        </div>
      </div> */}

      <ProjectDescription />
      <BottomBar />
    </div>
  );
};

export default Home;
