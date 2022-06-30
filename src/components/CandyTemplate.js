import "./CandyTemplate.css";
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
    <div className="CandyTemplate">
      {isHovering ? (
        <div className="Blur-Box" onMouseOut={() => setIsHovering(false)}>
          <div className="Buy-Button">BUY</div>
          <div className="Download-Button">
            <img src="img/download.svg" />
          </div>
        </div>
      ) : (
        ""
      )}
      <BlurImage src={img} onMouseOver={() => setIsHovering(true)}></BlurImage>
    </div>
  );
};

export default CandyTemplate;
