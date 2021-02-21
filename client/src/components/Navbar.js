import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout, loadUser } from '../features/userSlice';
import setAuthToken from "../utils/setAuthToken";
import axios from 'axios';

const Navbar = () => {

  const dispatch = useDispatch();
  
  let user = null;
  const token = null;

  const fetchUser = async () => {

    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('http://localhost:5000/user')
      dispatch(loadUser(res.data));
    } catch (err) {
      console.error(err.message);
    }

  }
  useEffect(() => {
    fetchUser();
  }, [token])

  user = useSelector(state => state.user.user);
  

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          Zo<span className="logo--red">tac.</span>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Blog
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <Link to="/register" className="nav__link">
                Register
              </Link>
            </li>
            { user ? (<li className="nav__item">
              <Link to="/" onClick={() => dispatch(logout())} className="nav__link">
                Logout
              </Link>
            </li>) : (<li className="nav__item">
              <Link to="/login" className="nav__link">
                Login
              </Link>
            </li>)}
          </ul>
        </nav>
        <ul className="menu-extra">
          <li className="box-user-name">
            <div href="#" className="user-icon-name">
              {user && user.name }
            </div>
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
  );
};

export default Navbar;
