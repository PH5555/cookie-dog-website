import { Link, useLocation } from "react-router-dom";
import React from "react";
import styled, { css } from "styled-components";

const Header = () => {
  const location = useLocation();
  const isAtHome = location.pathname == "/" ? true : false;
  const pages = [
    { name: "Candy Shop", isDisable: false },
    { name: "Prologue", isDisable: false },
    { name: "All Cookies", isDisable: true },
    { name: "Our Songs", isDisable: true },
    { name: "CookieDog Team", isDisable: false },
  ];

  const Container = styled.div`
    z-index: 2;
    min-width: 1125px;
    align-items: center;
    display: flex;
    height: 3.75rem;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    padding-top: 2rem;
    padding-bottom: 1rem;
    background-color: ${isAtHome ? "#e8437e" : "transparent"};
  `;

  const Box = styled.div`
    background-color: ${isAtHome
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(168, 141, 141, 0.18)"};
    border-radius: 5px;
    margin-right: 0.9rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  `;

  const Text = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    font-family: "AlegreyaSansSc-Medium";
    margin-bottom: 0px;
    margin-top: 0px;
    color: ${(props) =>
      props.disabled ? "grey" : isAtHome ? "black" : "white"};
  `;

  const Button = styled.div`
    width: 20rem;
    height: 4.5rem;
    line-height: 4.5rem;
    background-color: ${isAtHome ? "black" : "#ff0057"};
    color: white;
    font-weight: bold;
    margin-right: 6rem;
    text-align: center;
    border-radius: 14px;
    font-size: 1.5rem;
    margin-left: 2rem;

    border: ${isAtHome ? "1pt solid white" : "none"};
  `;

  return (
    <Container>
      <Link to="/">
        <Image src={isAtHome ? "img/logo_black.png" : "img/logo.png"} />
      </Link>
      <Menu>
        {pages.map((page) =>
          page.isDisable ? (
            <Box>
              <Text disabled>{page.name}</Text>
            </Box>
          ) : (
            <Link
              to={`/${
                page.name[0].toLowerCase() +
                page.name.replace(/ /g, "").slice(1)
              }`}
            >
              <Box>
                <Text>{page.name}</Text>
              </Box>
            </Link>
          )
        )}
        <IconCover>
          <IconBox src={`img/discord_icon${isAtHome ? "_black" : ""}.svg`} />
          <IconBox src={`img/twitter_icon${isAtHome ? "_black" : ""}.svg`} />
          <IconBox src={`img/instagram_icon${isAtHome ? "_black" : ""}.svg`} />
          <IconBox src={`img/opensea_icon${isAtHome ? "_black" : ""}.svg`} />
        </IconCover>
      </Menu>
      <Button>connect wallet</Button>
    </Container>
  );
};

const Image = styled.img`
  margin-left: 6rem;
  height: 4.5rem;
`;

const IconBox = styled.img`
  width: 1.5rem;
  margin-left: 2.2rem;
`;

const IconCover = styled.div`
  margin-left: 0.2rem;
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 30rem);
`;

export default Header;
