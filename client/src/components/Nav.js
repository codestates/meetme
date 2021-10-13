import React from 'react';
import '../css/Nav.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='nav-container'>
      <nav>
        <div className='nav-logo'><Link to='/'>meetme</Link></div>
          <Link to='/user/info'>
            <button className='nav-mypage'>mypage</button>
          </Link>
      </nav>
    </div>
  )
}

export default Header;