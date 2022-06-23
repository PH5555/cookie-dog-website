import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";

function Header() {
  const location = useLocation();
  const textColor = location.pathname == "/allCookies" ? "black" : "white";
  const divColor =
    location.pathname == "/allCookies"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.1)";

  const HeadText = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    font-family: "AlegreyaSansSc-Medium";
    margin-bottom: 0px;
    margin-top: 0px;
    color: ${textColor};
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
    background-color: ${divColor};
    border-radius: 5px;
    margin-right: 0.9rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  `;

  const IconBox = styled.div`
    background-color: ${divColor};
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-right: 1rem;
  `;

  return (
    <div className="App-Bar">
      <Link to="/">
        <img className="Logo" src="img/logo.png" />
      </Link>
      <div className="Menu">
        <Link to="/prologue" className="Cookies-Link">
          <Box>
            <HeadText>Candy Shop</HeadText>
          </Box>
        </Link>

        <Link to="/allCookies" className="Cookies-Link">
          <Box>
            <HeadText>All Cookies</HeadText>
          </Box>
        </Link>

        <Link to="/prologue" className="Cookies-Link">
          <Box>
            <HeadText>Prologue</HeadText>
          </Box>
        </Link>

        <Link to="/cookieDogTeam" className="Cookies-Link">
          <Box>
            <DisableText>Our Songs</DisableText>
          </Box>
        </Link>

        <Link to="/cookieDogTeam" className="Cookies-Link">
          <Box>
            <HeadText>CookieDog Team</HeadText>
          </Box>
        </Link>
        <div className="Sized-Box" />
        <IconBox>
          <img
            className="Header-Icon"
            src={
              location.pathname == "/allCookies"
                ? "img/discord_icon_black.svg"
                : "img/discord_icon.svg"
            }
          ></img>
        </IconBox>
        <IconBox>
          <img
            className="Header-Icon"
            src={
              location.pathname == "/allCookies"
                ? "img/twitter_icon_black.svg"
                : "img/twitter_icon.svg"
            }
          ></img>
        </IconBox>
        <IconBox>
          <img
            className="Header-Icon"
            src={
              location.pathname == "/allCookies"
                ? "img/insta_icon_black.svg"
                : "img/insta_icon.svg"
            }
          ></img>
        </IconBox>
        <IconBox>
          <img
            className="Header-Icon"
            src={
              location.pathname == "/allCookies"
                ? "img/opensea_icon_black.svg"
                : "img/opensea_icon.svg"
            }
          ></img>
        </IconBox>
      </div>
      <div className="Connect-Wallet-Button">connect wallet</div>
    </div>
  );
}

export default Header;
