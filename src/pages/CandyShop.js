import "./CandyShop.css";

function CandyShop() {
  return (
    <div className="Candyshop">
      <div className="Candyshop-Title">
        <div>
          <p className="Candyshop-Big-Title">SELECT YOUR HEART CANDY</p>
          <p className="Candyshop-Small-Title">
            Cookiedog is a new generation of pop culture community that live on
            the blockchain. They are fully interactive and evolve over time
            unlocking new capabilities, games, and
          </p>
        </div>
        <img className="Candyshop-Image" src="img/candyshop_background.png" />
      </div>
      <div className="Candy-List"></div>
    </div>
  );
}

export default CandyShop;