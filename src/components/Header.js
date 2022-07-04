import { Link, useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Header = () => {
  const pages = [
    { name: "Candy Shop", isDisable: false },
    { name: "Prologue", isDisable: false },
    { name: "All Cookies", isDisable: true },
    { name: "Our Songs", isDisable: true },
    { name: "CookieDog Team", isDisable: false },
  ];

  return (
    <Container>
      <Link to="/">
        <Image src="img/logo_black.png" />
      </Link>
      <Menu>
        {pages.map((page) =>
          page.isDisable ? (
            <Box>
              <DisableText>{page.name}</DisableText>
            </Box>
          ) : (
            <Link
              to={`/${
                page.name[0].toLowerCase() +
                page.name.replace(/ /g, "").slice(1)
              }`}
            >
              <Box>
                <HeadText>{page.name}</HeadText>
              </Box>
            </Link>
          )
        )}
        <IconCover>
          <IconBox src="img/discord_icon_black.svg" />
          <IconBox src="img/twitter_icon_black.svg" />
          <IconBox src="img/insta_icon_black.svg" />
          <IconBox src="img/opensea_icon_black.svg" />
        </IconCover>
      </Menu>
      <Button>connect wallet</Button>
    </Container>
  );
};

const Container = styled.div`
  z-index: 2;
  min-width: 1125px;
  align-items: flex-end;
  display: flex;
  height: 5rem;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: #e8437e;
`;

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

const Image = styled.img`
  margin-left: 6rem;
  height: 5rem;
  width: 10.5rem;
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

const IconCover = styled.div`
  margin-left: 0.2rem;
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 30rem);
`;

const Button = styled.div`
  width: 20rem;
  height: 4.5rem;
  line-height: 4.5rem;
  background-color: black;
  color: white;
  font-weight: bold;
  margin-right: 6rem;
  text-align: center;
  border-radius: 14px;
  font-size: 1.5rem;
  margin-left: 2rem;
  border: 1pt solid white;
`;

export default Header;
