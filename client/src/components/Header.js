import React from "react";
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="hero">
        <div className="hero__img">
          <div className="hero__box">
            <div className="text__upper">Summer Fashion</div>
            <div className="text__sale">SALE</div>
            <div className="text__bottom">
              Up to <span className="text--red">25%</span> off
            </div>
            <button className="text__btn">Buy now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
