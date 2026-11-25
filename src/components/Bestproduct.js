import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Rankimg01 from '../components/images/bestproduct/rangk_img01.jpeg';
import Rankimg02 from '../components/images/bestproduct/rangk_img02.jpeg';
import Rankimg03 from '../components/images/bestproduct/rangk_img03.jpeg';
import Rankimg04 from '../components/images/bestproduct/rangk_img04.jpeg';
import Rankimg05 from '../components/images/bestproduct/rangk_img05.jpeg';
import '../components/css/bestproduct.css'
function Bestproduct() {
  return (
    <>
          <section className="wrap bestProduct">
            <h2 className='sc_title'>🏆실시간 인기랭킹🏆</h2>
            <p className='sc_info_text'>가장 인기있는 상품만 모아보세요!</p>
            <div className='rank_wrap'>
              <ul className='rank_list'>
                <li>
                    <div className='img_box'>
                      <img src={Rankimg01} alt="이미지"/>
                    </div>
                    <div className='text_box'>
                      <p className='number'>1</p>
                      <p className='brand_name'>
                        [사미헌] 갈비탕<br/>
                        <span className='price'><strong>5%</strong> 13,770원</span>
                      </p>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' /> 담기
                    </div>
                </li>
                <li>
                    <div className='img_box'>
                      <img src={Rankimg02} alt="이미지"/>
                    </div>
                    <div className='text_box'>
                      <p className='number'>2</p>
                      <p className='brand_name'>
                        [비비고] 순살 생선구이 6종(택1)<br/>
                        <span className='price'><strong>5%</strong> 13,770원</span>
                      </p>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' />담기
                    </div>
                </li>
                <li>
                    <div className='img_box'>
                      <img src={Rankimg03} alt="이미지"/>
                    </div>
                    <div className='text_box'>
                      <p className='number'>3</p>
                      <p className='brand_name'>
                        [귤로장생] 타이벡 제주 감귤 2.5kg<br/>
                        <span className='price'><strong>5%</strong> 13,770원</span>
                      </p>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' />담기
                    </div>
                </li>
                <li>
                    <div className='img_box'>
                      <img src={Rankimg04} alt="이미지"/>
                    </div>
                    <div className='text_box'>
                      <p className='number'>4</p>
                      <p className='brand_name'>
                        [마더푸드] 쪽갈비 2종<br/>
                        <span className='price'><strong>5%</strong> 13,770원</span>
                      </p>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' />담기
                    </div>
                </li>
                <li>
                    <div className='img_box'>
                      <img src={Rankimg05} alt="이미지"/>
                    </div>
                    <div className='text_box'>
                      <p className='number'>5</p>
                      <p className='brand_name'>
                        [KF365] 한돈 목살 구이용 600g/1kg(냉장)<br/>
                        <span className='price'><strong>5%</strong> 13,770원</span>
                      </p>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' />담기
                    </div>
                </li>
              </ul>
              <div className='button more_btn'>전체 보기 <FontAwesomeIcon icon={faChevronRight} className='right_arrow_icon' /></div>
            </div>
          </section>
    </>
  )
}

export default Bestproduct