import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation, Autoplay, Scrollbar} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../components/css/mainslide.css'
import Mainslideimg01 from '../components/images/main/mainslide_img01.jpg'
import Mainslideimg02 from '../components/images/main/mainslide_img02.jpg'
import Mainslideimg03 from '../components/images/main/mainslide_img03.jpg'
import Mainslideimg04 from '../components/images/main/mainslide_img04.jpg'

function Mainslide() {
  return (
    <>
      <section>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={0} //슬라이드간격
          slidesPerView={1} //보여지는 슬라이드 개수
          navigation //네비게이션메뉴
          autoplay={{ delay: 3000 }} //자동슬라이드시간
          pagination={{ clickable: true }} //컨트롤버튼 클릭가능 여부
          scrollbar={{ draggable: true }} //터치스크롤 가능 여부
          className='main_slide' //슬라이드서식 적용하고 싶으면 작성하기
        >
          <SwiperSlide>
            <img src={Mainslideimg01} alt="슬라이드01"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg02} alt="슬라이드02"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg03} alt="슬라이드03"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mainslideimg04} alt="슬라이드04"/>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Mainslide