import "./MusicBottomBar.css";
import React, { useState } from "react";

const MusicBottomBar = (props) => {
  const { start, stop } = props;
  const [isMusicPlay, setMusicState] = useState(true);

  const setMusic = () => {
    if (isMusicPlay) setMusicState(false);
    else setMusicState(true);
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
              src={isMusicPlay ? "img/play.svg" : "img/pause.svg"}
              className="Music-Play-Pause"
              onClick={setMusic}
            ></img>
            <div className="Progress-Bar"></div>
            <div className="Progress">03:45</div>
            <img
              src="img/cancel.svg"
              onClick={stop}
              className="Close-Music"
            ></img>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MusicBottomBar;
