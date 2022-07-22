import React, { useState } from "react";
import "./ProjectDescriptionTemplate.css";
import { useNavigate } from "react-router-dom";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

const ProjectDescriptionTemplate = () => {
  const animatedItems = [
    useScrollFadeIn(),
    useScrollFadeIn(),
    useScrollFadeIn(),
  ];

  const navigate = useNavigate();

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
              CookieDOG is a new generation of decentralized music production
              for pop culture fans from across the globe to communicate and
              collaborate. The Coasis, the CookieDOG universe we’re going to
              create together, is virtual but at the same time, it’s real.
              <br />
              <br />
              Our identity is malleable in this place - you can make it up to
              your desired shape or let it disappear. Rebuilding the Coasis
              where different identities and art coexist, we share our
              inspirations with each other and cooperate to create an imaginary
              creature.
              <br />
              <br />
              There’s no designated path or destination. The universe each
              participant imagines infinitely expands like a parallel universe,
              and we travel to different universes like a star in the sky.
            </p>
          </div>
        </div>
        <img
          {...animatedItems[0]}
          className="Main-Description-Image-1"
          src="img/main_image_1.png"
          loading="lazy"
        />
      </div>
      <div className="Main-Description-2">
        <img
          {...animatedItems[1]}
          className="Main-Description-Image-2"
          src="img/main_image_2.png"
          loading="lazy"
        />
        <div>
          <div className="Main-Description-Title">
            <p>WE MAKE COOKIES</p>
          </div>
          <div className="Main-Description-Contents">
            <p>
              In a broader sense, we define Cookies as all forms of culture,
              art, and contents we consume. In a narrower sense, Cookie means
              NFT CookieDOG releases each season. Cookie NFT contains
              fractionalized music data and is pegged to “OVN”, a character that
              came to the real world.
              <br />
              <br />
              Cookie NFT holders have influence over artists that the community
              will discover and grow.
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
              Once you eat the heart candy, you can become a Cookie dog and
              enter the Coasis - the Cookiedog universe. Global artists and pop
              culture fans will communicate and create content together to
              rebuild the Coasis. All the heart candies are free and you can
              claim them in the candy shop by connecting your Metamask wallet
              (Gas fee applies)
            </p>
            <div className="Description-Yes">
              <div
                className="Candyshop-Button"
                onClick={() => navigate("/candyShop")}
              >
                <p>go to candyshop</p>
              </div>
            </div>
            <div>
              <p className="Season">
                only for Season 1<br />
                Early joiners of the CookieDOG server will become cookie dogs
                without eating the heart candy
              </p>
              <p className="Discord">CookieDOG Discord ></p>
            </div>
          </div>
        </div>
        <img
          {...animatedItems[2]}
          className="Main-Description-Image-3"
          src="img/main_image_3.png"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProjectDescriptionTemplate;
