import React, { useState } from "react";
import styled from "styled-components";

const CandyTemplate = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { img } = props;

  const BlurImage = styled.img`
    position: absolute;
    width: 100%;
    opacity: ${isHovering ? 0.5 : 1};
  `;

  return (
    <Container>
      {isHovering ? (
        <Box onMouseOut={() => setIsHovering(false)}>
          <Button size="big">BUY</Button>
          <Button size="small">
            <Image src="img/download.svg" />
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
  width: 23rem;
  height: 21.4rem;
  position: relative;
  margin-left: calc((100% - 118.3rem) / 5);
  margin-bottom: 8.5rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 23rem;
  height: 21.4rem;
  z-index: 2;
`;

const Button = styled.div`
  background-color: #210253;
  border-radius: 2.2rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  margin-right: 0.6rem;
  width: ${(props) => (props.size === "small" ? "5rem;" : "14.6rem")};
`;

const Image = styled.img`
  width: 2rem;
`;

export default CandyTemplate;
