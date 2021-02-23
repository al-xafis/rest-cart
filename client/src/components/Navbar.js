import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout, loadUser } from '../features/userSlice';
import { clearProducts } from '../features/productsSlice';
import setAuthToken from "../utils/setAuthToken";
import axios from 'axios';

const Navbar = () => {

  const dispatch = useDispatch();
  
  let user = null;

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
  }, [])

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
              <Link to="/" className="nav__link">
                Home
              </Link>
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
              <Link to="/" onClick={() => {
                dispatch(logout());
                dispatch(clearProducts());
              }} className="nav__link">
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
            <Link to="/stash" className="user-icon">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li className="box-cart">
            <Link to="/cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </Link>
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
