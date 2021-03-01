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

      const res = await axios.post('/user/login', body, config);
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
        <div className="login__account__title">
          <i className="fas fa-door-open login__account__title__icon"></i>
          <h1>Login</h1>
        </div>
        <form className="login__account__form" onSubmit={e => onLogin(e)}>
          <div className="login__account__mail">
            <div className="login__account__mail__box"><i className="far fa-envelope login__envelope"></i></div>
            <input type="text" className="login__account__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="login__account__mail">
            <div className="login__account__mail__box"><i className="fas fa-unlock login__lock"></i></div>
            <input type="password" className="login__account__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="button button--yel">Login</button>
        </form>
        
      </div>
    </div>
  )
};

export default Login;