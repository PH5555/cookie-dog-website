import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const MusicBottomBar = (props) => {
  const { start, stop, max } = props;
  const [isMusicPlay, setMusicState] = useState(false);
  const [count, setCount] = useState(0);
  const [musicProgress, setMusicProgress] = useState(0.0);
  const maxTime = parseInt(max / 60) + ":" + (max % 60);
  const intervalId = useRef(null);
  const savedCallback = useRef();

  const Progress = styled.div`
    width: ${musicProgress}%;
    background-color: white;
    height: 0.5rem;
    border-radius: 0.9rem;
    transition: width 0.1s linear;
  `;

  useEffect(() => {
    savedCallback.current = updateProgress;
  });

  const updateProgress = () => {
    setCount((count) => count + 1);
    setMusicProgress((count / max) * 100);
  };

  const setMusic = () => {
    if (isMusicPlay) {
      clearInterval(intervalId.current);
      setMusicState(false);
    } else {
      const callback = () => {
        savedCallback.current();
      };
      intervalId.current = setInterval(callback, 1000);
      setMusicState(true);
    }
  };

  const stopMusic = () => {
    clearInterval(intervalId.current);
    setCount(0);
    setMusicState(false);
    setMusicProgress(0);
    stop();
  };

  return (
    <div>
      {start ? (
        <Container>
          <MusicBar>
            <Image />
            <Box>
              <Text title>#012</Text>
              <Text>MuteHoon</Text>
            </Box>
            <Button
              src={isMusicPlay ? "img/pause.svg" : "img/play.svg"}
              onClick={setMusic}
            ></Button>
            <Bar>
              <Progress />
            </Bar>
            <Time>{maxTime}</Time>
            <Cancel src="img/cancel.svg" onClick={stopMusic}></Cancel>
          </MusicBar>
        </Container>
      ) : null}
    </div>
  );
};

const Container = styled.div`
  z-index: 2;
  min-width: 1125px;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 6rem;
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: #292929;
  opacity: 0.9;
`;

const MusicBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  background-color: #ffe1cf;
  margin-right: 2.1rem;
`;

const Box = styled.div`
  margin-right: 5.6rem;
`;

const Text = styled.p`
  font-family: "Arial";
  margin: 0 auto;
  font-size: ${(props) => (props.title ? "1.6rem" : "0.6rem")};
  color: ${(props) => (props.title ? "white" : "#cacaca")};
`;

const Button = styled.img`
  width: 3.68rem;
  margin-right: 6rem;
  cursor: pointer;
`;

const Bar = styled.div`
  position: relative;
  width: 42.396vw;
  height: 0.5rem;
  border-radius: 0.9rem;
  margin-right: 2.2rem;
  background-color: #6a6a6a;
`;

const Time = styled.div`
  color: white;
  font-size: 1rem;
  font-family: "Arial";
`;

const Cancel = styled.img`
  position: absolute;
  width: 2.5rem;
  cursor: pointer;
  right: 10rem;
`;

export default MusicBottomBar;
