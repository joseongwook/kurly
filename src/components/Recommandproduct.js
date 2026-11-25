import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faComment, faCommentDots, faComments } from '@fortawesome/free-solid-svg-icons';
import Recommandimg01 from '../components/images/recommandproduct/recommand_img01.jpg';
import Recommandimg02 from '../components/images/recommandproduct/recommand_img02.jpg';
import Recommandimg03 from '../components/images/recommandproduct/recommand_img03.jpg';
import Recommandimg04 from '../components/images/recommandproduct/recommand_img04.jpg';
import '../components/css/recommandproduct.css'
function Recommandproduct() {
  return (
    <>
          <section className="wrap RecommandProduct">
            <h2 className='sc_title'>이 상품 어때요 ?</h2>
            <div className='recommand_wrap'>
              <ul className='recommand_list'>
                <li>
                    <div className='img_box'>
                      <img src={Recommandimg01} alt="이미지"/>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' /> 담기
                    </div>
                    <div className='text_box'>
                      <p className='brand_name'>
                        [힐필드] 유기농 파사타 680g<br/>
                        <p className='cost'>6,900원</p>
                        <span className='price'><strong>12%</strong> 5,980원</span>
                        <p className='count'><FontAwesomeIcon icon={faCommentDots} className='balloon_icon' />56</p>
                      </p>
                    </div>
                </li>
                <li>
                    <div className='img_box'>
                      <img src={Recommandimg02} alt="이미지"/>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' />담기
                    </div>
                    <div className='text_box'>
                      <p className='brand_name'>
                        [달바] 글로우 핏 세럼 커버 쿠션 15g 3종 (택1) (NEW, 컬러)<br/>
                        <p className='cost'>48,000원</p>
                        <span className='price'><strong>29%</strong> 33,900원</span>
                        <p className='count'><FontAwesomeIcon icon={faCommentDots} className='balloon_icon' />169</p>
                      </p>
                    </div>
                </li>
                <li>
                    <div className='img_box'>
                      <img src={Recommandimg03} alt="이미지"/>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' />담기
                    </div>
                    <div className='text_box'>
                      <p className='brand_name'>
                        [꼬박꼬밥] 고단저당 꼬박꼬밥 7개입 7종 (택1)<br/>
                        <p className='cost'>35,000원</p>
                        <span className='price'><strong>40%</strong> 21,000원</span>
                        <p className='count'><FontAwesomeIcon icon={faCommentDots} className='balloon_icon' />448</p>
                      </p>
                    </div>
                </li>
                <li>
                    <div className='img_box'>
                      <img src={Recommandimg04} alt="이미지"/>
                    </div>
                    <div className='button cart_btn'>
                      <FontAwesomeIcon icon={faCartShopping} className='cart_icon' />담기
                    </div>
                    <div className='text_box'>
                      <p className='brand_name'>
                        [마더푸드] 쪽갈비 2종<br/>
                        <p className='cost'>10,670원</p>
                        <span className='price'><strong>16%</strong> 8,960원</span>
                        <p className='count'><FontAwesomeIcon icon={faCommentDots} className='balloon_icon' />9,999+</p>
                      </p>
                    </div>
                </li>
              </ul>
              {/* <div className='button more_btn'>전체 보기 <FontAwesomeIcon icon={faChevronRight} className='right_arrow_icon' /></div> */}
            </div>
          </section>
    </>
  )
}

export default Recommandproduct