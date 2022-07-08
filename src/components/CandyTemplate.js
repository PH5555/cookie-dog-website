import React, { useState } from "react";
import styled from "styled-components";

const CandyTemplate = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { img } = props;

  const BlurImage = styled.img`
    position: absolute;
    width: 100%;
  `;

  return (
    <Container>
      {isHovering ? (
        <Box onMouseOut={() => setIsHovering(false)}>
          <Button size="big">BUY</Button>
          <Button size="small">
            <Image src="img/download_candy.svg" />
          </Button>
        </Box>
      ) : (
        ""
      )}
      <BlurImage src={img} onMouseOver={() => setIsHovering(true)}></BlurImage>
    </Container>
  );
};

const Container = styled.div`
  min-width: 16.8rem;
  width: 11.979vw;
  height: 11.1458vw;
  position: relative;
  margin-left: 3.177vw;
  margin-bottom: 8.5rem;
`;

const Box = styled.div`
  min-width: 16.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 11.979vw;
  height: 11.1458vw;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 2;
`;

const Button = styled.div`
  background-color: #210253;
  border-radius: ${(props) => (props.size === "small" ? "1.9rem" : "2.2rem")};
  height: 4.6rem;
  display: flex;
  font-family: "Quantico-Regular";
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.1rem;
  letter-spacing: 0.5rem;
  text-indent: 0.5rem;
  margin-right: 0.4rem;
  width: ${(props) => (props.size === "small" ? "5rem;" : "12rem")};
`;

const Image = styled.img`
  width: 2rem;
`;

export default CandyTemplate;
