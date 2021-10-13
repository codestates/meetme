import React from 'react';
import '../css/EditMypage.css'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';

function Mypage() {

  return (
    <section className='edit-mypage-section'>
      <Nav />
      <div className='edit-mypage-container'>
        <div className='edit-mypage-image'></div>
        <button className='edit-mypage-img-btn'>이미지 업로드</button>
        <div className='edit-mypage-user'>Username</div>
        <div className='edit-mypage-user'>Password</div>
          <Link to='/user/info'>
          <button className='edit-mypage-bottom-btn'>완료</button>
          </Link>
      </div>
    </section>
  )
}

export default Mypage;