import React from 'react';
import './css/join.css'
function Join() {
  return (
    <>
      <section className='join_wrap'>
        <h2 className="sub_title">회원가입</h2>
        <div className="form_wrap">
        <p className='txt_p'><span className='importance'>*</span> 필수입력사항</p>
          <form className="form_area">
            <div className="form_box top">
              <div className="form_box_item id">
                <div className="left">
                  <label htmlFor="userID">
                    아이디<span className='importance'>*</span>
                  </label>
                </div>
                <div className="right">
                  <input id="userID" type="text" placeholder="아이디를 입력해주세요" />
                </div>
              </div>

              <div className="form_box_item pw">
                <div className="left">
                  <label htmlFor="userPW">
                    비밀번호<span className='importance'>*</span>
                  </label>
                </div>
                <div className="right">
                  <input id="userPW" type="password" placeholder="비밀번호를 입력해주세요" />
                </div>
              </div>

              <div className="form_box_item pwre">
                <div className="left">
                  <label htmlFor="userPWRe">
                    비밀번호확인<span className='importance'>*</span>
                  </label>
                </div>
                <div className="right">
                  <input
                    id="userPWRe"
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요"
                  />
                </div>
              </div>

              <div className="form_box_item name">
                <div className="left">
                  <label htmlFor="userNAME">
                    이름<span className='importance'>*</span>
                  </label>
                </div>
                <div className="right">
                  <input id="userNAME" type="text" placeholder="이름을 입력해 주세요" />
                </div>
              </div>

              <div className="form_box_item email">
                <div className="left">
                  <label htmlFor="userEmail">
                    이메일<span className='importance'>*</span>
                  </label>
                </div>
                <div className="right">
                  <input id="userEmail" type="text" placeholder="예)abcdefg" />
                </div>
              </div>

              <div className="form_box_item phone">
                <div className="left">
                  <label htmlFor="userPhone">
                    휴대폰<span className='importance'>*</span>
                  </label>
                </div>
                <div className="right">
                  <input id="userPhone" type="text" placeholder="숫자만 입력해주세요" />
                </div>
              </div>

              <div className="form_box_item address">
                <div className="left">
                  <label htmlFor="userAddress">
                    주소<span className='importance'>*</span>
                  </label>
                </div>
                <div className="right">
                  <input type="text" id="userAddress" placeholder="주소 검색"/>
                  <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                </div>
              </div>

              <div className="form_box_item gender">
                <div className="left">
                  <span>성별</span>
                </div>
                <div className="right">
                  <input id="userMale" name="gender" type="radio" value="male" />
                  <label htmlFor="userMale">남자</label>

                  <input id="userFemale" name="gender" type="radio" value="female" />
                  <label htmlFor="userFemale">여자</label>

                  <input
                    id="userNoChoice"
                    name="gender"
                    type="radio"
                    value="none"
                    defaultChecked
                  />
                  <label htmlFor="userNoChoice">선택안함</label>
                </div>
              </div>

              <div className="form_box_item birth">
                <div className="left">
                  <label htmlFor="userYear">생년월일</label>
                </div>
                <div className="right">
                  <div className="item">
                    <input id="userYear" type="text" placeholder="YYYY" />
                  </div>
                  <span>/</span>
                  <div className="item">
                    <input id="userMonth" aria-label="월" type="text" placeholder="MM" />
                  </div>
                  <span>/</span>
                  <div className="item">
                    <input id="userDay" aria-label="일" type="text" placeholder="DD" />
                  </div>
                </div>
              </div>

              <div className="form_box_item recommand">
                <div className="left">
                  <span>추가입력사항</span>
                </div>
                <div className="right">
                  <input id="userRecommand" type="checkbox" />
                  <label htmlFor="userRecommand">친구초대 추천인 아이디</label>
                </div>
              </div>
            </div>
          </form>

          <form className="form_area">
            <div className="form_box bottom">
              <div className="form_box_item">
                <p className='txt_p'>이용약관동의<span className='importance'>*</span></p>
              </div>
              <div className="form_box_item allagree">
                <div className="left">
                  <input id="allAgree" type="checkbox" />
                </div>
                <div className="right">
                  <label htmlFor="allAgree">전체 동의합니다</label>
                  <p className='txt_p'>선택 항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                </div>
              </div>

              <div className="form_box_item">
                <div className="left">
                  <input id="kurlyAgree" type="checkbox" />
                </div>
                <div className="right">
                  <label htmlFor="kurlyAgree">컬리 이용약관 동의 <span>(필수)</span></label>
                </div>
              </div>

              <div className="form_box_item">
                <div className="left">
                  <input id="kurlyAgree" type="checkbox" />
                </div>
                <div className="right">
                  <label htmlFor="kurlyAgree">개인정보 수집&middot;이용 <span>(필수)</span></label>
                </div>
              </div>

              <div className="form_box_item">
                <div className="left">
                  <input id="eventAgree" type="checkbox" />
                </div>
                <div className="right">
                  <label htmlFor="eventAgree">이벤트 및 혜택정보 발송을 위한 수집&middot;이용 <span>(필수)</span></label>
                </div>
              </div>

              <div className="form_box_item">
                <div className="left">
                  <input id="adAgree" type="checkbox" />
                </div>
                <div className="right">
                  <label htmlFor="adAgree">광고성 정보 수신 <span>(선택)</span></label>
                  <div className='right_item'>
                    <div className='check_item'>
                      <input id="MSG" type="checkbox" />
                      <label htmlFor='MSG'>문자</label>
                    </div>
                    <div className='check_item'>
                      <input id="EMAIL" type="checkbox" />
                      <label htmlFor='EMAIL'>이메일</label>
                    </div>
                    <div className='check_item'>
                      <input id="KAKAO" type="checkbox" />
                      <label htmlFor='KAKAO'>카카오</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form_box_item ageyear">
                <div className="left">
                  <input id="YearsOld" type="checkbox" />
                </div>
                <div className="right">
                  <label htmlFor="YearsOld">본인은 만 14세 이상입니다. <span>(필수)</span></label>
                </div>
              </div>
            </div>
          </form>
          <div className='button join_btn'>가입하기</div>
        </div>
      </section>
    </>
  );
}

export default Join;