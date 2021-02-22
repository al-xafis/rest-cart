import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { register } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = async (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      const body = JSON.stringify({ name, email, password });

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const res = await axios.post('http://localhost:5000/user/register', body, config);
      dispatch(register(res.data));
      history.push('/')
    } catch (e) {
      console.log(e);
    }
    }
  }

  return (
    <div className="register">
      <Link to="/"><i className="fas fa-arrow-circle-left back"></i></Link>
      <div className="register__account__container">
        <div className="account__title">
          <i className="fas fa-user account__title__icon"></i>
          <h1>Register an account</h1>
        </div>
        <form className="account__form" onSubmit={e=> signUp(e)}>
          <div className="account__mail">
            <div className="account__mail__box"><i className="fas fa-user envelope"></i></div>
            <input type="text" className="account__input" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="account__mail">
            <div className="account__mail__box"><i className="far fa-envelope envelope"></i></div>
            <input type="email" className="account__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="account__mail">
            <div className="account__mail__box"><i className="fas fa-unlock lock"></i></div>
            <input type="password" className="account__input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="account__mail">
            <div className="account__mail__box"><i className="fas fa-unlock lock"></i></div>
            <input type="password" className="account__input" placeholder="Confirm Password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)}/>
          </div>
          
          <button type="submit" className="button button--yel">Complete my registration</button>
        </form>
        
      </div>
    </div>
  )
};

export default Register;