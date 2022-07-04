import React from "react";
import styled from "styled-components";

const BottomBar = () => {
  const snsList = ["discord", "twitter", "instagram", "opensea"];
  return (
    <Container>
      <Logo src="img/logo-white.png" />
      <SnsListCover>
        {snsList.map((sns) => (
          <SnsListItem>
            <Image src={`img/${sns}_icon.svg`} />
            <Text>${sns[0].toUpperCase() + sns.slice(1)}</Text>
          </SnsListItem>
        ))}
      </SnsListCover>
    </Container>
  );
};

const Container = styled.div`
  min-width: 128rem;
  background-color: black;
  position: relative;
  display: flex;
  padding-top: 40px;
  padding-bottom: 244px;
  padding-left: 12.5rem;
`;

const Logo = styled.img`
  position: absolute;
  width: 20.7rem;
`;

const SnsListCover = styled.div`
  position: absolute;
  margin-left: 30.7rem;
  margin-top: 20px;
`;

const SnsListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 25px;
`;

const Text = styled.div`
  margin: 0 auto;
  color: white;
  font-family: "Heebo";
  font-size: 14px;
  margin-left: 29px;
`;

export default BottomBar;
