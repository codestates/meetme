import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Landing.css'

function Landing() {
  return (
    <section className='landing-container'>
      
      {/* title */}
      <div className='landing-title'>
        <p>meet<span>me</span></p>
      </div>

      {/* meetme circle */}

      {/* buttons */}
      <div className='landing-buttons'>
        <Link to='/login'>
          <button className='landing-btn'>Login</button>
        </Link>
        <Link to='/signup'>
          <button className='landing-btn'>Signup</button>
        </Link>  
      </div>

    </section>
  )
}

export default Landing;