import "./Home.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import CookieCard from "../components/CookieCard";
import MintingBox from "../components/MintingBox";
import BottomBar from "../components/BottomBar";
import ProjectDescription from "../components/ProjectDescriptionTemplate";
import styled from "styled-components";

const Home = (props) => {
  const navigate = useNavigate();
  const { open, setMax } = props;
  const [imgLoad, setImgLoad] = useState(false);

  return (
    <div className="Home">
      <MintingArea>
        {imgLoad ? <PlaceHolder /> : ""}
        <Background src="img/background.png" onLoad={() => setImgLoad(true)} />
        <MintingBox />
      </MintingArea>

      {/* <div className="View-Cookies-Home-Area">
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

const Background = styled.img`
  width: 100%;
`;

const MintingArea = styled.div`
  min-width: 128rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaceHolder = styled.div`
background: #010225,
height: 100%,
width: 56.25vw,
`;

export default Home;
