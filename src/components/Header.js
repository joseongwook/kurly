import React from 'react'
import {Link} from 'react-router'
import '../assets/css/common.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown, faSortDown } from '@fortawesome/free-solid-svg-icons';
/* images */
import Logo from '../assets/images/logo.svg';

function Header() {
  return (
    <>
      <header>
        <div className='top_banner_wrap'>
          <div className='top_banner'>
            <p className='txt_p'>
              지금 가입하고 <span className=''>최대 1만 2천원 할인 쿠폰 받아가세요!</span>
            </p>
            <div className='close_btn'>
              <FontAwesomeIcon icon={faTimes} className='close_icon' style={{fontSize: '14px' }}/>
            </div>
          </div>
        </div>
        <div className='bottom_wrap'>
          <div className='lnb_wrap'>
            <ul className='lnb_list'>
              <li><Link to='/join' className='active'>회원가입</Link></li>
              <li className='line'></li>
              <li><Link to='/login'>로그인</Link></li>
              <li className='line'></li>
              <li><Link to='/cscenter'>고객센터</Link><FontAwesomeIcon icon={faSortDown} className='down_icon' style={{fontSize: '14px' }}/></li>
            </ul>
          </div>
          <div className='search_wrap'>
            <div className='logo_area'>
              <h1>
                <Link to='/'><img src={Logo} alt="로고"/></Link>
              </h1>
              <div className='kurly_area'>
                <ul className='kurly_list'>
                  <li><Link to='/' className='active'>마켓컬리</Link></li>
                  <li><Link to='/'>뷰티컬리</Link></li>
                </ul>
              </div>
            </div>
            <div className='search_area'>
              <input type="text" placeholder='검색어를 입력해주세요'/>
              <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} className='serach_icon' style={{fontSize: '22 px' }}/></button>
            </div>
            <div className='etc_area'>
              <ul className='etc_list'>
                <li><Link to='/'><FontAwesomeIcon icon={faLocationDot} className='location_icon' style={{fontSize: '22px' }}/></Link></li>
                <li><Link to='/'><FontAwesomeIcon icon={faRegularHeart} className='heart_icon' style={{fontSize: '22px' }}/></Link></li>
                <li><Link to='/'><FontAwesomeIcon icon={faCartShopping} className='cart_icon' style={{fontSize: '22px' }}/></Link></li>
              </ul>
            </div>
          </div>
          <div className='gnb_wrap'>
            <ul className='gnb_list01'>
              <li><FontAwesomeIcon icon={faBars} className='menu_icon' style={{fontSize: '16px' }}/>카테고리</li>
            </ul>
            <ul className='gnb_list02'>
              <li><Link to='/sub/best'>베스트</Link></li>
              <li><Link to='/sub/sale'>세일</Link></li>
              <li><Link to='/sub/fashion'>패션</Link></li>
              <li><Link to='/sub/living'>리빙</Link></li>
              <li><Link to='/sub/newitem'>신상</Link></li>
              <li><Link to='/sub/special'>특가혜택</Link></li>
            </ul>
            <span className='delivery'><Link to='/'><strong className='active'>샛별&middot;하루</strong> 배송안내</Link></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header