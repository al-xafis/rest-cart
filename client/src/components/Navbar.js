import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, loadUser } from "../features/userSlice";
import { clearProducts } from "../features/productsSlice";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

const Navbar = () => {
  let orders = useSelector((state) => state.products.products);

  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  let user = null;

  const fetchUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      if (localStorage.token) {
      const res = await axios.get("http://localhost:5000/user");
      dispatch(loadUser(res.data));
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  user = useSelector((state) => state.user.user);

  if (!localStorage.token) {
    user = null;
  }

  return (
    <div className="navbar">
      <div className="container__navbar">
        <div className="logo">
          <Link to="/" className="go__home">
            Zo<span className="logo--red">tac.</span>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/register" className="nav__link">
                Register
              </Link>
            </li>
            {user ? (
              <li className="nav__item">
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(logout());
                    dispatch(clearProducts());
                  }}
                  className="nav__link"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav__item">
                <Link to="/login" className="nav__link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <ul className="menu-extra">
          <li className="box-user-name">
            <div href="#" className="user-icon-name">
              {user && user.name}
            </div>
          </li>
          <li className="box-user">
            <Link to="/stash" className="user-icon">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li className="box-cart">
            <Link to="/cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            {orders.length > 0 && (
              <div className="badge">
                <span className="orders">{orders.length}</span>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar__container">
        <div className="navbar--phone">
          <div className="logo">
            <Link to="/" className="go__home">
              Zo<span className="logo--red">tac.</span>
            </Link>
          </div>
          <a href="#" className="toggle-button" onClick={() => setActive(!active)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="navbar--phone__box">
            <ul className="menu-extra">
              <li className="box-user">
                <Link to="/stash" className="user-icon">
                  <i className="fas fa-user"></i>
                </Link>
              </li>
              <li className="box-cart">
                <Link to="/cart" className="cart-icon">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
                {orders.length > 0 && (
                  <div className="badge">
                    <span className="orders">{orders.length}</span>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        {active ? (<ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="nav__link">
              Blog
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/register" className="nav__link">
              Register
            </Link>
          </li>
          {user ? (
            <li className="nav__item">
              <Link
                to="/"
                onClick={() => {
                  dispatch(logout());
                  dispatch(clearProducts());
                }}
                className="nav__link"
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav__item">
              <Link to="/login" className="nav__link">
                Login
              </Link>
            </li>
          )}
        </ul>) : null}
      </div>
    </div>
  );
};

export default Navbar;
