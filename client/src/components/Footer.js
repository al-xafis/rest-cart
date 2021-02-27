import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex-container">
          <ul className="footer__list footer__col-1">
            <li className="footer__item">
              <a href="#" className="footer__link">Monday 11:30 am - 10:00 pm</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Tuesday 11:30 am - 11:00 pm</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Wednesday 11:30 am - 11:00 pm</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Thursday 11:30 am - 11:00 pm</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Friday 11:30 am - 11:00 pm</a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/login" className="footer__link">Login</Link>
            </li>
            <li className="footer__item">
              <Link to="/register" className="footer__link">Register</Link>
            </li>
            <li className="footer__item">
              <Link to="/cart" className="footer__link">Cart</Link>
            </li>
            <li className="footer__item">
              <Link to="/contact" className="footer__link">Contact Us</Link>
            </li>
          </ul>
          <div className="footer__info">
            <div className="footer__logo">Zo<span className="logo--red">tac.</span></div>
            <div className="footer__address">6 TTZ, Tashkent, Uzbekistan</div>
            <div className="footer__phone">+998 93 303 40 67</div>
            <div className="footer__mail">alkh4fis@gmail.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;