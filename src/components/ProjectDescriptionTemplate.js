import React, { useState } from "react";
import "./ProjectDescriptionTemplate.css";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

const ProjectDescriptionTemplate = () => {
  const animatedItems = [
    useScrollFadeIn(),
    useScrollFadeIn(),
    useScrollFadeIn(),
  ];

  return (
    <div className="Project-Description">
      <div className="Main-Description-1">
        <div>
          <div className="Main-Description-Title">
            <p id="Title-What-Is">WHAT IS</p>
            <p>COOKIEDOG?</p>
          </div>
          <div className="Main-Description-Contents">
            <p>
              Cookiedog is a new generation of pop culture community that live
              on the blockchain. They are fully interactive and evolve over time
              unlocking new capabilities, games, and experiences – and because
              they're NFTs, they're truly 100% yours.
            </p>
          </div>
        </div>
        <img
          {...animatedItems[0]}
          className="Main-Description-Image-1"
          src="img/main_image_1.png"
        />
      </div>
      <div className="Main-Description-2">
        <img
          {...animatedItems[1]}
          className="Main-Description-Image-2"
          src="img/main_image_2.png"
        />
        <div>
          <div className="Main-Description-Title">
            <p>WE SELL COOKIES</p>
          </div>
          <div className="Main-Description-Contents">
            <p>
              Cookie can be music, video, . all of contents we consume and make
              our lives happy.<br></br>
              <br></br>Every seoson you can buy limited version of cookies nft
              of<br></br>cookiedog. and enjoy make expansion of piece of
              contents.<br></br>I will be exciting and thriiled.<br></br>
              build and expand all pieces of contents
            </p>
          </div>
        </div>
      </div>
      <div className="Main-Description-3">
        <div>
          <div className="Main-Description-Title">
            <p>Take the heart Candy</p>
          </div>
          <div className="Main-Description-Contents">
            <p>
              If you take heart candy, you can access cookiedog universe. You
              can create you can be architect for coasis. just take the heart
              candy and join our membership.
            </p>
            <div className="Description-Yes">
              <div className="Candyshop-Button">
                <p>go to candyshop</p>
              </div>
            </div>
          </div>
        </div>
        <img
          {...animatedItems[2]}
          className="Main-Description-Image-3"
          src="img/main_image_3.png"
        />
      </div>
    </div>
  );
};

export default ProjectDescriptionTemplate;
