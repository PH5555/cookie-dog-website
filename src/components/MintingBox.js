import React from "react";
import styled, { css } from "styled-components";

const MintingBox = () => {
  return (
    <Container>
      <TitleCover>
        <Text type="title" color="#fc297e">
          COOKIEDOG
        </Text>
      </TitleCover>
      <MintBox>
        <Flow src="img/flow.png" />
        <Image src="img/sample.png" />
        <InfoBox>
          <Text type="name">COOKIEDOG Season 1 NFT</Text>
          <Text type="cookies">COOKIES</Text>
          <Text type="number">vol. 1000 (50 cookies)</Text>
          <Text type="date">6 April, 12PM EDT</Text>
          <Button>Mint Now</Button>
          <Text type="situation">1000/1000</Text>
        </InfoBox>
      </MintBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  padding-top: 19rem;

  outline: none;
  border: none;
  display: flex;
`;

const Flow = styled.img`
  width: 21rem;
  position: absolute;
  right: 50px;
  top: -21px;
  transform: rotate(3deg);
`;

const Button = styled.div`
  width: 19.6rem;
  height: 4rem;
  border-radius: 14px;
  background-color: #c4c4c4;
  color: white;
  text-align: center;
  line-height: 4rem;
  font-size: 2rem;
  font-weight: bold;
`;

const TitleCover = styled.div`
  left: 50%;
  width: 62.3958vw;
  transform: translate(-50%, 0%);
  z-index: 1;
  position: absolute;
`;

const MintBox = styled.div`
  left: 50%;
  transform: translate(-50%, 0%);
  position: absolute;
  min-width: 76.2rem;
  margin-top: 5.3rem;
  width: 62.3958vw;
  background-color: black;
  display: flex;
  margin-bottom: 11.1rem;
  border-radius: 20px;
  float: left;
  border: 1.2rem solid #fc297e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
`;

const InfoBox = styled.div`
  width: calc(62.9% - 4.8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 2.5%;
  width: 37.1%;
  float: left;
  border-radius: 20px;
  background-color: pink;
`;

const TextStyles = css`
  ${(props) =>
    props.type === "title" &&
    css`
      font-family: "CoopcerBlackStd";
      font-size: 6.375rem;
      margin-left: 1rem;
      margin-bottom: 0;
      margin-top: 0;
      text-shadow: 0.6rem 0.7rem 0pt black;
    `}

  ${(props) =>
    props.type === "cookies" &&
    css`
      font-size: 3.5rem;
      margin: 0;
      font-family: "Frijole-Rejular";
    `} 

  ${(props) =>
    props.type === "number" &&
    css`
      margin-top: 0.3rem;
      font-family: "Quantico-Regular";
      font-size: max(1.05vw, 1.5rem);
    `}

  ${(props) =>
    props.type === "name" &&
    css`
      font-family: "Quantico-Bold";
      margin-top: 5rem;
      font-size: 2.8rem;
      margin-bottom: 1px;
    `}

  ${(props) =>
    props.type === "date" &&
    css`
      margin-top: 15.3%;
      font-family: "Quantico-Bold";
      font-size: 2.4rem;
      margin-bottom: 1.5rem;
    `}

  ${(props) =>
    props.type === "situation" &&
    css`
      font-size: 1.8rem;
      margin-top: 1.2rem;
      font-family: "Quantico-Regular";
    `}
`;

const Text = styled.p`
  text-align: ${(props) => (props.color ? "" : "center")};
  color: ${(props) => props.color || "white"};
  ${TextStyles};
`;

export default MintingBox;
