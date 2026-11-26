import React, { useState } from 'react';
import '../pages/css/login.css';
import Naver from '../pages/images/naver.png';
import Kakao from '../pages/images/kakao.png';

function Login() {
  const [formData, setFormData] = useState({
    id: '',
    pw: '',
  });

  const nameChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginCheck = (e) => {
    e.preventDefault();
    const { id, pw } = formData;

    if (id === 'master') {
      if (pw === '1234') {
        alert('성공');
      } else {
        alert('패스워드가 틀립니다. 다시 확인하세요');
      }
    } else {
      alert('아이디가 맞지 않습니다. 다시 확인하세요');
    }
  };

  return (
    <>
      <section className="login_wrap">
        <form onSubmit={loginCheck} className="form_wrap">
          <fieldset>
            <legend className="sub_title">로그인</legend>
            <div className="login_input_wrap">
              <div className="login_area">
                <label htmlFor="id_txt"></label>
                <input
                  id="id_txt"
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={nameChange}
                  placeholder="아이디를 입력해주세요"
                />
              </div>
              <div className="password_area">
                <label htmlFor="pw_txt"></label>
                <input
                  id="pw_txt"
                  type="password"
                  name="pw"
                  value={formData.pw}
                  onChange={nameChange}
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>
            </div>
            <div className="find_area">
              <a href="/">아이디 찾기</a>
              <span className="line"></span>
              <a href="/">비밀번호 찾기</a>
            </div>
            <div className="button_area">
              <button type="submit" className="login_btn btn">
                <span>로그인</span>
              </button>
              <button type="button" className="join_btn btn">
                <span>회원가입</span>
              </button>
            </div>
            <h2 className="sub_title">간편 로그인</h2>
            <div className="button_area">
              <button type="button" className="naver_btn btn">
                <img src={Naver} alt="" />
                <span>네이버로 계속하기</span>
              </button>
              <button type="button" className="kakao_btn btn">
                <img src={Kakao} alt="" />
                <span>카카오로 계속하기</span>
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default Login;