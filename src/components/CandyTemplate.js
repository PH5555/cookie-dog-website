import "./CandyTemplate.css";
import React, { useState } from "react";

const CandyTemplate = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { img } = props;
  return (
    <div className="CandyTemplate">
      <div>
        <img
          src={img}
          className="Candy-Image"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        ></img>
        {isHovering ? <p>sample</p> : ""}
      </div>
    </div>
  );
};

export default CandyTemplate;
