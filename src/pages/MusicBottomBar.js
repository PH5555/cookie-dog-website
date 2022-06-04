import "./MusicBottomBar.css";
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
        <div className="Bottom-Music-Bar">
          <div>
            <div className="Music-Image"></div>
            <div className="Music-Info">
              <p className="Music-Title">#012</p>
              <p className="Music-Content">MuteHoon</p>
            </div>
            <img
              src={isMusicPlay ? "img/pause.svg" : "img/play.svg"}
              className="Music-Play-Pause"
              onClick={setMusic}
            ></img>
            <div className="Progress-Bar">
              <Progress></Progress>
            </div>
            <div className="Time">{maxTime}</div>
            <img
              src="img/cancel.svg"
              onClick={stopMusic}
              className="Close-Music"
            ></img>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MusicBottomBar;
