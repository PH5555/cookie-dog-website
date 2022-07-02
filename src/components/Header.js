import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div className="App-Bar">
      <Link to="/">
        <img className="Logo" src="img/logo_black.png" />
      </Link>
      <div className="Menu">
        <Link to="/candyShop" className="Cookies-Link">
          <Box>
            <HeadText>Candy Shop</HeadText>
          </Box>
        </Link>

        <Link to="/prologue" className="Cookies-Link">
          <Box>
            <HeadText>Prologue</HeadText>
          </Box>
        </Link>

        {/* <Link to="/allCookies" className="Cookies-Link">
          <Box>
            <DisableText>All Cookies</DisableText>
          </Box>
        </Link> */}

        <Box>
          <DisableText>All Cookies</DisableText>
        </Box>

        {/* <Link to="/cookieDogTeam" className="Cookies-Link">
          <Box>
            <DisableText>Our Songs</DisableText>
          </Box>
        </Link> */}

        <Box>
          <DisableText>Our Songs</DisableText>
        </Box>

        <Link to="/cookieDogTeam" className="Cookies-Link">
          <Box>
            <HeadText>CookieDog Team</HeadText>
          </Box>
        </Link>
        <div className="Sized-Box" />
        <IconBox src="img/discord_icon_black.svg" />

        <IconBox src="img/twitter_icon_black.svg" />

        <IconBox src="img/insta_icon_black.svg" />

        <IconBox src="img/opensea_icon_black.svg" />
      </div>
      <div className="Connect-Wallet-Button">connect wallet</div>
    </div>
  );
};

const HeadText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "AlegreyaSansSc-Medium";
  margin-bottom: 0px;
  margin-top: 0px;
  color: black;
`;

const DisableText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "AlegreyaSansSc-Medium";
  margin-bottom: 0px;
  margin-top: 0px;
  color: grey;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  margin-right: 0.9rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
`;

const IconBox = styled.img`
  width: 1.5rem;
  margin-left: 2.2rem;
`;

export default Header;
