import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Nav from '../components/Nav'


function Login() {

  return (
    <div className="login-wrap">
      <Nav/>
      <div className='login-container'>
        <h3>Login</h3>
          <form id='form'>
            <div className='login-form'>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' placeholder='Enter Email'/>
            </div>
          
            <div className='login-form'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' placeholder='Enter Password'/>
            </div>
          </form>
        
        <div className='login-buttons'>
          <Link to='/'>
            <button className='submit-btn'>Login</button>
          </Link>
          <button className='google-btn'>
            <div className='google-txt-'>Sign in with</div>
            <div className='google-icon'></div>
          </button>
        </div>
        <Link to='/signup'>
          <div className='login-signup'>Sign up here</div>
        </Link>
      </div>
    </div>
  );
}

export default Login;