import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            Zo<span className="logo--red">tac.</span>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <Link to="/login" className="nav__link">
                  Login
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/register" className="nav__link">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="menu-extra">
            <li className="box-search">
              <a href="#" className="search-icon">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li className="box-user">
              <a href="#" className="user-icon">
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li className="box-cart">
              <a href="#" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <div className="badge">
                <span className="orders">2</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
