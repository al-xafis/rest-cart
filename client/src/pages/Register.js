import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const signUp = (event) => {
    event.preventDefault();
  }

  return (
    <div className="register">
      <Link to="/"><i className="fas fa-arrow-circle-left back"></i></Link>
      <div className="register__account__container">
        <div className="account__title">
          <i className="fas fa-user account__title__icon"></i>
          <h1>Register an account</h1>
        </div>
        <form className="account__form" onSubmit={signUp}>
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