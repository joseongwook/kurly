import React from 'react'
import inSta from '../assets/images/ico_instagram.png';
import faceBook from '../assets/images/ico_fb.png';
import bLog from '../assets/images/ico_blog.png';
import youtuBe from '../assets/images/ico_youtube.png';
function Footer() {
  return (
    <>
      <footer>
        <section className='footer_wrap'>
          <div className='footer_area left'>
            <div className='text_box'>
              <p className='txt_p'>고객행복센터</p>
            </div>
            <div className='info_box'>
              <div className='info_list'>
                <p className='txt_p'><span>1644-1107</span> 월~토요일 오전 7시 - 오후 6시</p>
              </div>
              <div className='info_list'>
                <button className='info_btn'>카카오톡 문의</button>
                <div className='info_list_text_box'>
                  <span>월~토요일 | 오전 7시 - 오후 6시</span>
                  <span>일/공휴일 | 오전 7시 - 오후 1시</span>
                </div>
              </div>
              <div className='info_list'>
                <button className='info_btn'>1:1 문의</button>
                <div className='info_list_text_box'>
                  <span>365일</span>
                  <span>고객센터 운영시간에 순차적으로 답변드리겠습니다.</span>
                </div>
              </div>
              <div className='info_list'>
                <button className='info_btn'>대량주문 문의</button>
                <div className='info_list_text_box'>
                  <span>월~금요일 | 오전 9시 - 오후 6시</span>
                  <span>점심시간 | 낮 12시 - 오후 1시</span>
                </div>
              </div>
              <span className='txt_span'>비회원 문의 : <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a></span>
            </div>
          </div>
          <div className='footer_area right'>
            <nav className='footer_gnb_area'>
              <ul className='footer_gnb_list'>
                <li><a href="/" target='_blank'>회사소개</a></li>
                <li><a href="/" target='_blank'>컬리소개영상</a></li>
                <li><a href="/" target='_blank'>투자정보</a></li>
                <li><a href="/" target='_blank'>인재채용</a></li>
                <li><a href="/" target='_blank'>이용약관</a></li>
                <li><a className='bold' href="/" target='_blank'>개인정보처리방침</a></li>
                <li><a href="/" target='_blank'>이용안내</a></li>
                <li><a href="/" target='_blank'>입점신청</a></li>
              </ul>
            </nav>
            <div className='address'>
              <span>법인명 (상호) : 주식회사 컬리</span>
              <span className='line'></span>
              <span>사업자등로번호 : 000-00-00000</span>
              <span><a className='active business_info' href="/" target='_blank'>사업자정보확인</a></span><br/>
              <span>통신판매업 : 제 0000-abcd-00000 호</span><br/>
              <span>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</span>
              <span className='line'></span>
              <span>대표이사 : 000</span><br/>
              <span>채용문의 : <a href="mailto:recruit@kurlycorp.com" className="active">recruit@kurlycorp.com</a></span><br/>
              <span>팩스 : 000 - 000 - 0000</span>
            </div>
            <div className='sns_area'>
              <ul className='sns_list'>
                <li><a href="/"><img src={inSta} alt="로고"/></a></li>
                <li><a href="/"><img src={faceBook} alt="로고"/></a></li>
                <li><a href="/"><img src={bLog} alt="로고"/></a></li>
                <li><a href="/"><img src={youtuBe} alt="로고"/></a></li>
              </ul>
            </div>
          </div>
        </section>
        <section className='footer_copy_wrap'>
          <div className=''>
            <p className='txt_p'>
              컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
              마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문,
              품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
            </p>
            <p className='txt_p'>&copy; KURLY CORP. ALL RIGHTS RESERVED</p>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer