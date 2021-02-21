import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async e => {
    e.preventDefault();
    const body = JSON.stringify({ email, password });

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }

      const res = await axios.post('http://localhost:5000/user/login', body, config);
      dispatch(login(res.data));
      history.push('/')
    } catch (e) {
      console.log(e);
    }
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
          <button type="submit" onClick={e => onLogin(e)} className="button button--yel">Login</button>
        </form>
        
      </div>
    </div>
  )
};

export default Login;