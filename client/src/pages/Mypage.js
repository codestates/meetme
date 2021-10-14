import React from 'react';
import '../css/Mypage.css'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';

function Mypage() {
  const myPageTags = [
    { '영화': '해리포터' },
    { '책': '헝거게임' },
    { '가수': '에스파' },
    { '동물': '코끼리' }
  ]
  return (
    <section className='mypage-section'>
      <Nav />
      <div className='mypage-container'>
        <div className='mypage-image'></div>
        <div className='mypage-user'>Username</div>
        <div className="mypage-tags">
          {myPageTags.map(tag => (
            <div className='mypage-tag-wrapper'>
              <div className="mypage-category">{Object.keys(tag)}</div>
              <Link to='/tagfriend'><button className='mypage-tag'>{Object.values(tag)}</button></Link>
            </div>
          ))}
        </div>
        <div className='mypage-bottom'>
          <Link to='/user/userinfo'><button className='mypage-bottom-btn'>Edit</button></Link>
          <button className='mypage-bottom-btn'>Logout</button>
        </div>
      </div>
    </section>
  )
}

export default Mypage;