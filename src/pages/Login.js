import React from 'react'
import '../pages/css/login.css'
import Naver from '../pages/images/naver.png';
import Kakao from '../pages/images/kakao.png';
function Login() {
  return (
    <>
      <section className='login_wrap'>
        <h2 className='sub_title'>로그인</h2>
        <div className='form_wrap'>
          <div className='login_input_wrap'>
            <div className="login_area">
              <input id="id" type="text" placeholder="아이디를 입력해주세요" />
            </div>
            <div className="password_area">
              <input id="pw" type="text" placeholder="비밀번호를 입력해주세요" />
            </div>
          </div>
          <div className='find_area'>
            <a href="/">아이디 찾기</a>
            <span className='line'></span>
            <a href="/">비밀번호 찾기</a>
          </div>
          <div className='button_area'>
            <button type='submit' className='login_btn btn'><span>로그인</span></button>
            <button type='button' className='join_btn btn'><span>회원가입</span></button>
          </div>
          <h2 className='sub_title'>간편 로그인</h2>
          <div className='button_area'>
            <button type='button' className='naver_btn btn'>
              <img src={Naver} alt=""/>
              <span>네이버로 계속하기</span>
            </button>
            <button type='button' className='kakao_btn btn'>
              <img src={Kakao} alt=""/>
              <span>카카오로 계속하기</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login