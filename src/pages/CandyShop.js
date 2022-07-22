import "./CandyShop.css";
import CandyTemplate from "../components/CandyTemplate";

const CandyShop = () => {
  return (
    <div className="Candyshop">
      <div className="Candyshop-Title">
        <div>
          <p className="Candyshop-Big-Title">SELECT YOUR HEART CANDY</p>
          <p className="Candyshop-Small-Title">
            Once you eat the heart candy, you can become a Cookie dog and enter
            the Coasis - the Cookiedog universe. Global artists and pop culture
            fans will communicate and create content together to rebuild the
            Coasis.
          </p>
        </div>
        <img className="Candyshop-Image" src="img/candyshop_background.png" />
      </div>
      <div className="Candy-List">
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
        <CandyTemplate img="img/candy.png"></CandyTemplate>
      </div>
    </div>
  );
};

export default CandyShop;
