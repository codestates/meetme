import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css';
import Nav from '../components/Nav'


function Signup() {

  return (
    <div className="signup-wrap">
      <Nav/>
      <div className='signup-container'>
        <h3>Signup</h3>
          <form id='form'>
            <div className='signup-form'>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' placeholder='Enter Email'/>
            </div>
          
            <div className='signup-form'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' placeholder='Enter Password'/>
            </div>
            <div className='signup-form'>
              <label htmlFor='password'>Confirm Password</label>
              <input type='password' id='confirm-password' placeholder='Enter Password'/>
            </div>
          </form>
        
          <Link to='/'>
            <button className='signup-btn'>Signup</button>
          </Link>
      </div>
    </div>
  );
}

export default Signup;