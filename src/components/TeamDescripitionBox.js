import "./TeamDescriptionBox.css";
import React from "react";

const TeamDescriptionBox = (props) => {
  const { img, name, role } = props;
  return (
    <div className="Team-Box">
      <img src={img}></img>
      <div className="Profile">
        <div className="Profile-Name">{name}</div>
        <div className="Profile-Role">{role}</div>
      </div>
    </div>
  );
};

export default TeamDescriptionBox;
