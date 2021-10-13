import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/Signup.css';
import Nav from '../components/Nav'

function Signup() {
  const [ userinfo, setuserinfo] = useState({
      email: '',
      password: '',
      repassword: '',
      username: '',
      mobile: ''
  });
  const history = useHistory();
  const { password, repassword } = userinfo;

  // 이미 등록된 이메일인지 확인하는 메세지 
  const [ emailErrMsg, setEmailErrMsg ] = useState('');
  
  // 비밀번호와 리비밀번호와 동일 여부 확인
  const isPWDSuccess = password === repassword;

  // 비밀번호와 리비밀번호 일치
  const pwdSuccessMsg = isPWDSuccess
                ? 'pwd-txt pwd-success-txt' // 비밀번호가 일치하다는 메시지를 보임
                : 'pwd-txt pwd-success-txt hide' // 비밀번호가 일치하다는 메시지를 숨김

  // 비밀번호와 리비밀번호 불일치
  let pwdFailMsg = !isPWDSuccess
                ? 'pwd-txt pwd-fail-txt' // 비밀번호가 불일치하다는 메시지를 보임
                : 'pwd-txt pwd-fail-txt hide' // // 비밀번호가 불일치하다는 메시지를 숨김
  
  // 리비밀번호에 아무것도 입력되지 않았다면
  // 어떤 메세지도 보이지 않음
  if(repassword.length === 0) {
    pwdFailMsg = 'pwd-txt hide'
  }
    // 비밀번호 유효성 검사에 따른 메세지
  // 8~16자 영문 대 소문자, 숫자, 특수문자를 사용
  const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  // 정규표현식과 일치하면
  // 정규표현식과 일치하지 않으면
  let pwdVaildMsg;
  let pwdInvaildMsg;

  if(regExp.test(password)) {
    pwdVaildMsg = 'pwd-txt pwd-vaild-txt';
    pwdInvaildMsg = 'pwd-txt pwd-invaild-txt hide';
  } else {
    pwdVaildMsg = 'pwd-txt pwd-vaild-txt hide';
    pwdInvaildMsg = 'pwd-txt pwd-invaild-txt';
  }

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value })
  };

  const handleSignup = () => {
    const { email, password } = userinfo;

    axios.post('', {
      email,
      password
    }, { 'Content-Type': 'application/json', withCredentials: true })
    .then(res => {

      // 이미등록된 이메일이면
      // 등록된 이메일을 알리는 에러 메시지 표시
      if(res.data.message === 'Entered email already exists') {
        setEmailErrMsg('이미 등록된 이메일 입니다.')
      } else {
        setEmailErrMsg('')
      }
      
      // 회원가입 성공시 
      if(res.status === 201) {
        history.push("/")
        return;
      }
      
    }).catch( err => console.log(err) )
  };

  return (
    <div className="signup-wrap">
      <Nav/>
      <div className='signup-container'>
        <h3>Signup</h3>
          <form onSubmit={(e) => e.preventDefault()} id='form'>
            <div className='signup-form'>
              <label htmlFor='email' onChange={handleInputValue('email')}>Email</label>
              <input type='text' id='email' placeholder='Enter Email'/>
              <span className="email-err-txt">{emailErrMsg}</span>
            </div>
          
            <div className='signup-form'>
              <label htmlFor='password'>Password</label>
              <input 
                type='password'
                id='password'
                placeholder='Enter Password'
                onChange={handleInputValue('password')}
              />
              <span className={pwdVaildMsg}>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>
              <span className={pwdInvaildMsg}>사용가능한 비밀번호 입니다.</span>
            </div>
            <div className='signup-form'>
              <label htmlFor='password'>Confirm Password</label>
              <input 
                type='password'
                id='confirm-password'
                placeholder='Enter Password'
                onChange={handleInputValue('repassword')}
              />
              <span className={pwdSuccessMsg}>비밀번호가 일치합니다.</span>
              <span className={pwdFailMsg}>비밀번호가 일치하지 않습니다.</span>
            </div>
          </form>
          <Link to='/'>
            <button
              className='signup-btn'
              onClick={handleSignup}
            >
              Signup
            </button>
          </Link>
      </div>
    </div>
  );
}

export default Signup;