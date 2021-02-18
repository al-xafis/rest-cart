import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
  }

  return (
    <div className="login">
      <Link to="/"><i className="fas fa-arrow-circle-left back"></i></Link>
      <div className="register__account__container">
        <div className="account__title">
          <i className="fas fa-door-open account__title__icon"></i>
          <h1>Login</h1>
        </div>
        <form className="account__form">
          <div className="account__mail">
            <div className="account__mail__box"><i className="far fa-envelope envelope"></i></div>
            <input type="text" className="account__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="account__mail">
            <div className="account__mail__box"><i className="fas fa-unlock lock"></i></div>
            <input type="password" className="account__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" onClick={login} className="button button--yel">Login</button>
        </form>
        
      </div>
    </div>
  )
};

export default Login;